import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import supabase from '../../../supabase';
import goTo from '../helpers/navigation';

const CheckEmail = () => {
  const nav = useNavigation();

      useEffect(() => {
        const authListener = supabase.auth.onAuthStateChange((event, session) => {
          // event can be 'SIGNED_IN', 'SIGNED_OUT', or 'SESSION_EXPIRED'
          // session contains the user session data

          if (event === 'CONFIRMATION_SUCCESS') {
            // User signed in
            console.log('User confirmed email:', session.user);
            goTo.UserHome(nav);
          } else if (event === 'SIGNED_OUT') {
            // User signed out
            console.log('User signed out');
          } else if (event === 'SESSION_EXPIRED') {
            // User session expired
            console.log('User session expired');
          }
        });

        // Clean up the event listener when the component unmounts
        return () => {
          authListener.unsubscribe();
        };
    }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Almost done!</Text>
      <Text style={styles.text}>Just check your email for a link to sign in.</Text>
      <Pressable style={styles.button} onPress={() => {goTo.GuestHome(nav)}}>
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