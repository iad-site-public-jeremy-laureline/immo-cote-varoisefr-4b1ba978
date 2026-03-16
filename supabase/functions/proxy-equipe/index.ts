import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3RQHcWn2WxpY5WPFy01Bjp21ntrfPLp1o1NJvNMxSTmg4nujZA4T156FW9KFsSi/exec?sheet=equipe";

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Fetching equipe from Apps Script...");
    const response = await fetch(APPS_SCRIPT_URL, {
      headers: { 'Accept': 'application/json' },
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Apps Script returned ${response.status}`);
    }

    const data = await response.json();
    console.log(`Received ${Array.isArray(data) ? data.length : 0} members`);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error fetching equipe:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
