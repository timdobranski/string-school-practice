import { ImageBackground, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState, useContext }  from 'react';
import goTo from '../helpers/navigation';
import supabase from '../../../supabase';




const GuestHome = () => {
  const nav = useNavigation();

  // async function getAndSetSession () {
  //   const { data, error } = await supabase.auth.getSession()
  //   if (data.session.user) {
  //     console.log(`User ${data.session.user.email} signed in; redirecting from GuestHome to UserHome...`)
  //   }
  //   if (error) {console.log('Error in getSession; navigating to Guest Home: ', error);
  //     goTo.GuestHome(nav);}
  // }

  // useEffect(() => {
  //   getAndSetSession();

  //   }, [])

  return (
    <ImageBackground
    source={require('../../../assets/images/backgroundVerticalDimmer.jpg')}
    style={styles.backgroundImage}
    resizeMode='cover'
  >
    < ScrollView contentContainerStyle={styles.guestHomeContainer}>
      <Header />
      {/* <Text style={styles.text}>
        {`Welcome to the String School mobile app! Current students can sign in below:`}
      </Text> */}
      <Pressable
        onPress={() =>{goTo.SignIn(nav)}}
        style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
      </Pressable>
      <Text style={styles.text}>
        {`To book new lessons, choose a spot below for a free introductory session`}
      </Text>
      <Schedule />
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  guestHomeContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'economica',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  signInButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    width: '25%',
    alignItems: 'center',
    marginBottom: 30,
  },
  signInButtonText: {
    fontFamily: 'economica',
    fontSize: 20,

  }
});

export default GuestHome;