const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const BASE_URL = "https://script.google.com/macros/s/AKfycbzrfZmhQtcOsYvaSNypq3_2lqYmL_KmJUxnQEAZ4G2KfWZe7Oc5hE2qa_jMSE7HhaXh/exec";

async function followRedirects(url: string): Promise<string> {
  let currentUrl = url;
  for (let i = 0; i < 10; i++) {
    const res = await fetch(currentUrl, {
      method: 'GET',
      redirect: 'manual',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });
    console.log(`Step ${i}: ${currentUrl} -> ${res.status}`);
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get('location');
      if (loc) {
        currentUrl = loc;
        continue;
      }
    }
    const text = await res.text();
    return text;
  }
  throw new Error('Too many redirects');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const text = await followRedirects(`${BASE_URL}?sheet=equipe`);
    const data = JSON.parse(text);
    console.log(`OK: ${Array.isArray(data) ? data.length : 0} members`);
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
