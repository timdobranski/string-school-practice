import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const CheckEmail = ({ session }) => {
  const navigation = useNavigation();

  const navigateToGuestHome = () => {
    navigation.navigate('Guest Home');
  };
  const navigateToUserHome = () => {
    navigation.navigate('User Home');
  };


    useEffect(() => {
      if (session) {
        navigateToUserHome()
      } else {
        navigateToGuestHome(); // Redirect to sign-in screen if user session is not available
      }
    }, [session]);


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