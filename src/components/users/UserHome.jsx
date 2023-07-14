import React, { useState, useEffect, useContext } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground } from 'react-native';
import Footer from '../Footer/Footer';
import SignOut from './SignOut';
import { useNavigation } from '@react-navigation/native';
import { SessionContext } from '../helpers/SessionContext';

export default function UserHome() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const sessionObj = useContext(SessionContext);
  const session = sessionObj.session;

  const navigation = useNavigation();
  const navigateToSignIn = () => navigation.navigate('Sign In');
  // const [session, setSession] = useState(null);

  useEffect(() => {
    if (session && session.user) {
      console.log('session.user: ', session.user)
      // setSession(session.user);
      // getProfile();
    } else {
      console.log('no session in UserHome: ', session);
      navigateToSignIn();
    }
    }, [])



  // async function getProfile() {
  //   try {
  //     setLoading(true);
  //     console.log('session: ', session);
  //     if (!session?.user) throw new Error('No user on the session!');

  //     let { data, error, status } = await supabase
  //       .from('profiles')
  //       .select(`username, website, avatar_url`)
  //       .eq('id', session?.user.id)
  //       .single();
  //     if (error && status !== 406) {
  //       throw error;
  //     }

  //     if (data) {
  //       setUsername(data.username);
  //       setWebsite(data.website);
  //       setAvatarUrl(data.avatar_url);
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       Alert.alert(error.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }

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
