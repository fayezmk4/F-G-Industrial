import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Inquiry = {
  id?: string;
  name: string;
  phone: string;
  email: string;
  service_category: string;
  project_size?: string;
  project_details?: string;
  status?: string;
  created_at?: string;
};
