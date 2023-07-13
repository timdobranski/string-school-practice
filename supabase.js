import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store'
import { createClient } from '@supabase/supabase-js';

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key)
  },
}
  // Supabase handling
  const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const SUPABASE_API_KEY = process.env.EXPO_PUBLIC_SUPABASE_API_KEY;
  // console.log('supabase: ', SUPABASE_API_KEY, SUPABASE_URL)
  const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
    auth: {
      storage: ExpoSecureStoreAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    }
  });


  export default supabase;


  // const fetchStudents = async () => {
  //   try {
  //     const { data, error } = await supabase.from('students').select('first_name');
  //     if (error) {
  //       console.error('Error fetching students:', error.message);
  //     } else {
  //       console.log('Students:', data);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  // };

  // Call the fetchStudents function to initiate the data retrieval
  //fetchStudents();

