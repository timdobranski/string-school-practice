import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
  // Supabase handling
  const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const SUPABASE_API_KEY = process.env.EXPO_PUBLIC_SUPABASE_API_KEY;
  // console.log('supabase: ', SUPABASE_API_KEY, SUPABASE_URL)
  const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);


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


  // console.log('supabase: ', SUPABASE_API_KEY, SUPABASE_URL)
  export default supabase;