const cfg = window.RAIL_CONFIG || {};
const configured = cfg.SUPABASE_URL && !cfg.SUPABASE_URL.includes('PASTE_') && cfg.SUPABASE_ANON_KEY && !cfg.SUPABASE_ANON_KEY.includes('PASTE_');
if (!configured) {
  document.addEventListener('DOMContentLoaded', () => {
    const b = document.createElement('div');
    b.className = 'configBanner';
    b.innerHTML = '<b>Setup required:</b> Open <code>web/config.js</code> and paste your Supabase Project URL and anon/publishable key. Then refresh.';
    document.body.prepend(b);
  });
}
const supabaseClient = configured ? window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY) : null;
