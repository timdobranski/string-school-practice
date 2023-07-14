import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import supabase from '../../../supabase';

const CheckEmail = () => {
  const [session, setSession] = useState(null);
  const navigation = useNavigation();

  const navigateToGuestHome = () => {
    navigation.navigate('Guest Home');
  };
  const navigateToUserHome = () => {
    navigation.navigate('User Home');
  };


    useEffect(() => {
      console.log('session in checkEmail: ', supabase.auth.session())
      setSession(supabase.auth.session());
      if (session) {
        navigateToUserHome()
      } else {
        navigateToGuestHome(); // Redirect to sign-in screen if user session is not available
      }
    }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Almost done!</Text>
      <Text style={styles.text}>Just check your email for a link to sign in.</Text>
      <Pressable style={styles.button} onPress={navigateToGuestHome}>
        <Text style={styles.buttonText}>Return Home</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fontSize: 22,
  color: 'white',
  fontFamily: 'economica',
  marginVertical: 10,
});

export default CheckEmail;