import React from 'react';
import { Alert, StyleSheet, Text, Pressable } from 'react-native';
import supabase from '../../../supabase';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';

export default function SignOut() {
  const nav = useNavigation();
  async function signOut() {
    try {
      await supabase.auth.signOut();
      goTo.GuestHome(nav);
    } catch (error) {
      Alert.alert('Error signing out', error.message);
    }
  }

  return (
    <Pressable style={styles.button} onPress={signOut}>
      <Text style={styles.buttonText}>Sign Out</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
