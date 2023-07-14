import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground } from 'react-native';
import Footer from '../Footer/Footer';
import SignOut from './SignOut';
import goTo from '../helpers/navigation';


export default function UserHome() {

    useEffect(() => {
      supabase.auth.getSession()
        .then((data) => {
          console.log('Session in UserHome: ', data.session)
        })
        .catch((error) => {
          console.log('error in UserHome: ', error)
          //goTo.signIn();
        })
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


// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import supabase from '../../../supabase';

// const UserHome = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     checkSession();
//   }, []);

//   const checkSession = async () => {
//     const { user, error } = await supabase.auth.getSession();
//     if (error) {
//       // Error occurred while checking session
//       console.log('Error checking session:', error);
//       // Navigate to the 'Guest Home' page
//       navigation.navigate('GuestHome');
//     } else if (user) {
//       // User is signed in
//       // Perform any necessary actions or navigate to a different screen
//       // For example:
//       // navigation.navigate('Profile');
//     } else {
//       // User is not signed in
//       // Navigate to the 'Guest Home' page
//       navigation.navigate('Guest Home');
//     }
//   };

//   return (
//     <View>
//       <Text>Loading...</Text>
//     </View>
//   );
// };

// export default UserHome;
