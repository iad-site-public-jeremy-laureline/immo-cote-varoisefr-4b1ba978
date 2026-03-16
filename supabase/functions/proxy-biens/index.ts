const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzrfZmhQtcOsYvaSNypq3_2lqYmL_KmJUxnQEAZ4G2KfWZe7Oc5hE2qa_jMSE7HhaXh/exec?sheet=biens";

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Fetching biens...");
    
    // First request to get the redirect URL
    const initial = await fetch(APPS_SCRIPT_URL, {
      redirect: 'manual',
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    
    let finalUrl = APPS_SCRIPT_URL;
    if (initial.status >= 300 && initial.status < 400) {
      finalUrl = initial.headers.get('location') || APPS_SCRIPT_URL;
      console.log(`Redirected to: ${finalUrl}`);
    }
    
    // Follow the redirect
    const response = await fetch(finalUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json',
      },
    });

    const text = await response.text();
    console.log(`Status: ${response.status}, Length: ${text.length}`);
    
    if (!response.ok) {
      throw new Error(`Apps Script returned ${response.status}`);
    }

    const data = JSON.parse(text);
    console.log(`Parsed ${Array.isArray(data) ? data.length : 0} biens`);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
