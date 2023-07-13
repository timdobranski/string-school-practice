import { Image, ImageBackground, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Schedule from '../Schedule/Schedule';
import { useNavigation } from '@react-navigation/native';


const GuestHome = () => {
const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate('Sign In');
  };

  return (
    <ImageBackground
    source={require('../../../assets/images/backgroundVerticalDimmer.jpg')}
    style={styles.backgroundImage}
    resizeMode='cover'
  >
    < ScrollView contentContainerStyle={styles.guestHomeContainer}>
      <Header />
      <Text style={styles.text}>
        {`Welcome to the String School mobile app. Current students can sign in here.`}
      </Text>
      <Pressable
        onPress={goToSignIn}
        style={styles.signInButton}>
          <Text>Sign In</Text>
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
  }
});

export default GuestHome;