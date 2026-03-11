/**
 * SECRETS & CONFIGURATION
 * 
 * Replace the placeholder values below with your actual keys.
 * This ensures the app works correctly on any hosting platform (like Hostinger)
 * without needing to set environment variables manually.
 */

export const SECRETS = {
  // Supabase (Public)
  VITE_SUPABASE_URL: 'https://zocncwchaakjtsvlscmd.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'sb_publishable_Ot34P55l4JGe2RjZywLovA_UokWsJ0I',

  // Supabase (Private - Server Side)
  SUPABASE_SERVICE_ROLE_KEY: 'YOUR_SERVICE_ROLE_KEY',

  // SMTP (Hostinger)
  SMTP_HOST: 'smtp.hostinger.com',
  SMTP_PORT: 465,
  SMTP_USER: 'hello@maldives-serenitytravels.com',
  SMTP_PASS: 'Sphinx900#',
  SMTP_FROM: '"Hello" <hello@tripmaldives.co>',

  // App URL
  APP_URL: 'https://ais-dev-mvclsw6xodparojsp5u6yj-9926905175.asia-southeast1.run.app',
};
