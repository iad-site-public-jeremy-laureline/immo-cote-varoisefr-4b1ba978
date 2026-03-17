import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function renderContactEmail(data: Record<string, string>): { subject: string; html: string } {
  const subject = `Nouveau message de ${data.nom} — Site immobilier-cote-varoise.fr`
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; background: #f8f6f3; padding: 32px;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 12px; padding: 32px; border: 1px solid #e8e0d4;">
    <h1 style="color: #1a2b4a; font-size: 22px; margin-bottom: 24px;">📩 Nouveau message de contact</h1>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #888; width: 120px;">Nom</td><td style="padding: 8px 0; color: #1a2b4a; font-weight: 600;">${escapeHtml(data.nom)}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0; color: #1a2b4a;">${escapeHtml(data.email)}</td></tr>
      ${data.telephone ? `<tr><td style="padding: 8px 0; color: #888;">Téléphone</td><td style="padding: 8px 0; color: #1a2b4a;">${escapeHtml(data.telephone)}</td></tr>` : ''}
    </table>
    <div style="margin-top: 20px; padding: 16px; background: #f8f6f3; border-radius: 8px;">
      <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Message :</p>
      <p style="color: #1a2b4a; margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
    <p style="color: #bbb; font-size: 11px; margin-top: 24px; text-align: center;">Envoyé depuis immobilier-cote-varoise.fr</p>
  </div>
</body>
</html>`
  return { subject, html }
}

function renderEstimationEmail(data: Record<string, string>): { subject: string; html: string } {
  const typeLabels: Record<string, string> = {
    appartement: 'Appartement', maison: 'Maison', villa: 'Villa', terrain: 'Terrain', local: 'Local commercial',
  }
  const villeLabels: Record<string, string> = {
    'six-fours': 'Six-Fours-les-Plages', sanary: 'Sanary-sur-Mer', bandol: 'Bandol',
    toulon: 'Toulon', 'la-seyne': 'La Seyne-sur-Mer', ollioules: 'Ollioules',
  }
  const subject = `Nouvelle demande d'estimation — ${escapeHtml(data.prenom)} ${escapeHtml(data.nom)}`
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; background: #f8f6f3; padding: 32px;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 12px; padding: 32px; border: 1px solid #e8e0d4;">
    <h1 style="color: #1a2b4a; font-size: 22px; margin-bottom: 24px;">🏠 Nouvelle demande d'estimation</h1>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #888; width: 120px;">Prénom</td><td style="padding: 8px 0; color: #1a2b4a; font-weight: 600;">${escapeHtml(data.prenom)}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Nom</td><td style="padding: 8px 0; color: #1a2b4a; font-weight: 600;">${escapeHtml(data.nom)}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Téléphone</td><td style="padding: 8px 0; color: #1a2b4a;">${escapeHtml(data.telephone)}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0; color: #1a2b4a;">${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Type de bien</td><td style="padding: 8px 0; color: #1a2b4a;">${escapeHtml(typeLabels[data.typeBien] || data.typeBien)}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Ville</td><td style="padding: 8px 0; color: #1a2b4a;">${escapeHtml(villeLabels[data.ville] || data.ville)}</td></tr>
    </table>
    ${data.message ? `
    <div style="margin-top: 20px; padding: 16px; background: #f8f6f3; border-radius: 8px;">
      <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Message :</p>
      <p style="color: #1a2b4a; margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>` : ''}
    <p style="color: #bbb; font-size: 11px; margin-top: 24px; text-align: center;">Envoyé depuis immobilier-cote-varoise.fr</p>
  </div>
</body>
</html>`
  return { subject, html }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase configuration')
    }

    const body = await req.json()
    const { template, data } = body

    if (!template || !data) {
      return new Response(JSON.stringify({ error: 'Missing template or data' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    let rendered: { subject: string; html: string }
    if (template === 'contact') {
      rendered = renderContactEmail(data)
    } else if (template === 'estimation') {
      rendered = renderEstimationEmail(data)
    } else {
      return new Response(JSON.stringify({ error: 'Unknown template' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const messageId = `${template}-${crypto.randomUUID()}`
    const recipient = 'contact@immobilier-cote-varoise.fr'

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { error: enqueueError } = await supabase.rpc('enqueue_email', {
      queue_name: 'transactional_emails',
      payload: {
        to: recipient,
        subject: rendered.subject,
        html: rendered.html,
        from: 'Jérémy & Laureline Immobilier <noreply@notify.immobilier-cote-varoise.fr>',
        message_id: messageId,
        template_name: template,
      },
    })

    if (enqueueError) {
      console.error('Enqueue error:', enqueueError)
      throw new Error(`Failed to enqueue email: ${enqueueError.message}`)
    }

    // Log the pending email
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: template,
      recipient_email: recipient,
      status: 'pending',
      metadata: data,
    })

    return new Response(JSON.stringify({ success: true, message_id: messageId }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
