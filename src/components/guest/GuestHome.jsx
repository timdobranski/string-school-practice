import { Image, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Schedule from '../Schedule/Schedule';

const GuestHome = () => {
  return (
    <ImageBackground
    source={require('../../../assets/images/backgroundVerticalDimmer.jpg')}
    style={styles.backgroundImage}
    resizeMode='cover'
  >
    < ScrollView style={styles.guestHomeContainer}>
      <Header />
      <Text style={styles.text}>
        {`Welcome to the String School mobile app. Current students can sign in here.`}
      </Text>
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
  }
});

export default GuestHome;