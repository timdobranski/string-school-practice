import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import supabase from '../../../supabase';
import goTo from '../helpers/navigation';

const CheckEmail = () => {
  const nav = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={styles.header}>All set!</Text>
      <Text style={styles.text}>Just check your email for a confirmation link at your convenience.</Text>
      <Pressable style={styles.button} onPress={() => {goTo.UserHome(nav)}}>
        <Text style={styles.buttonText}>Home</Text>
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