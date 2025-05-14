
import { supabase } from '@/integrations/supabase/client';

// Helper function to ensure the papers bucket exists
export const ensurePapersBucket = async () => {
  try {
    // Get existing buckets
    const { data: buckets, error } = await supabase.storage.listBuckets();
    
    if (error) {
      console.error('Error fetching buckets:', error);
      return false;
    }
    
    // Check if papers bucket exists
    const papersBucketExists = buckets?.some(bucket => bucket.name === 'papers');
    
    if (!papersBucketExists) {
      // Create the papers bucket
      const { error: createError } = await supabase.storage.createBucket('papers', {
        public: true
      });
      
      if (createError) {
        console.error('Error creating papers bucket:', createError);
        return false;
      }
      
      console.log('Papers bucket created successfully');
    }
    
    return true;
  } catch (error) {
    console.error('Unexpected error:', error);
    return false;
  }
};

// Initialize storage when the app starts
export const initializeStorage = async () => {
  await ensurePapersBucket();
};
