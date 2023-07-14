import React, { useState, useEffect } from 'react';
import supabase from '../../../supabase';
import { StyleSheet, View, Alert, Text, ImageBackground } from 'react-native';
// import { Button, Input } from 'react-native-elements';
import Footer from '../Footer/Footer';
import SignOut from './SignOut';
import { useNavigation } from '@react-navigation/native';

export default function UserHome({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const navigation = useNavigation();
  const navigateToSignIn = () => navigation.navigate('Sign In');

  useEffect(() => {
    if (session) {
      getProfile();
    } else {
      navigateToSignIn(); // Redirect to sign-in screen if user session is not available
    }
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  // async function updateProfile({ username, website, avatar_url }) {
  //   try {
  //     setLoading(true);
  //     if (!session?.user) throw new Error('No user on the session!');

  //     const updates = {
  //       id: session?.user.id,
  //       username,
  //       website,
  //       avatar_url,
  //       updated_at: new Date(),
  //     };

  //     let { error } = await supabase.from('profiles').upsert(updates);

  //     if (error) {
  //       throw error;
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
