const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3RQHcWn2WxpY5WPFy01Bjp21ntrfPLp1o1NJvNMxSTmg4nujZA4T156FW9KFsSi/exec?sheet=biens";

async function fetchWithRedirects(url: string, maxRedirects = 5): Promise<Response> {
  let currentUrl = url;
  for (let i = 0; i < maxRedirects; i++) {
    const res = await fetch(currentUrl, { redirect: 'manual' });
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location');
      if (!location) throw new Error('Redirect without location header');
      currentUrl = location;
      console.log(`Redirect ${i + 1} -> ${currentUrl}`);
      continue;
    }
    return res;
  }
  throw new Error('Too many redirects');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Fetching biens from Apps Script...");
    const response = await fetchWithRedirects(APPS_SCRIPT_URL);

    if (!response.ok) {
      console.error(`Status: ${response.status}, Body: ${await response.text()}`);
      throw new Error(`Apps Script returned ${response.status}`);
    }

    const data = await response.json();
    console.log(`Received ${Array.isArray(data) ? data.length : 0} biens`);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error fetching biens:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
