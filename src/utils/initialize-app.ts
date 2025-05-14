
import { initializeStorage } from './supabase-storage';

export const initializeApp = async () => {
  // Initialize storage
  await initializeStorage();
  
  // Add other initialization steps here as needed
};
