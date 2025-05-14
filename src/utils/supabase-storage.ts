import { supabase } from '@/integrations/supabase/client';

// Initialize storage when the app starts
export const initializeStorage = async () => {
  // The bucket is now created via migrations, so we don't need to create it programmatically
  return true;
};