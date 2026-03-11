/**
 * CONFIGURATION & SECRETS
 * 
 * This file centralizes all API keys and configuration settings.
 * For production hosting (like Hostinger), you can either set these as 
 * environment variables or replace the placeholder values below.
 */

export const CONFIG = {
  // Supabase Configuration (Public/Client-side)
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || 'https://zocncwchaakjtsvlscmd.supabase.co',
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_Ot34P55l4JGe2RjZywLovA_UokWsJ0I',

  // App URL (Public)
  APP_URL: import.meta.env.VITE_APP_URL || window.location.origin,

  // API URL for client-side requests
  // If left empty, it will use relative paths (works if frontend and backend are on the same server)
  API_URL: import.meta.env.VITE_API_URL || '',
};
