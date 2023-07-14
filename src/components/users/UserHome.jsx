import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground } from 'react-native';
import Footer from '../Footer/Footer';
import SignOut from './SignOut';
import goTo from '../helpers/navigation';
import { useNavigation } from '@react-navigation/native';


export default function UserHome() {
  const [userSession, setUserSession] = useState(null);

  async function getAndSetSession ()  {
    const { data, error } = await supabase.auth.getSession()
    if (data) {
      console.log('Session User ', data.session.user.email)
      setUserSession(data.session)
    }
    if (error) {console.log('Error in getSession; navigating to Guest Home: ', error);
      goTo.GuestHome(nav);}
  }

    useEffect(() => {
      getAndSetSession();
    }, [])

  return (
    <ImageBackground
      source={require('../../../assets/images/backgroundVerticalDimmer.jpg')}
      style={styles.backgroundImage}
      resizeMode='cover'>
        <View style={styles.container}>
          <SignOut />
          <Text style={styles.text}>Welcome Home!</Text>
        </View>
      <Footer />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 50,
  },
  text: {
    color: 'white',
  },
});