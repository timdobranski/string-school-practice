import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Schedule from './src/components/Schedule/Schedule';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';

const bgDim = process.env.EXPO_PUBLIC_BG_DIM;
console.log('bgDim: ', bgDim);

export default function App() {
  // Font handling
  const [fontsLoaded] = useFonts({
    'economica': require('./assets/fonts/Economica/Economica-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/backgroundVerticalDimmer.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      />
      <ScrollView>
      <Header />
        <Text style={styles.text}>
          {`
          Welcome to the String School mobile app.
          Current students can sign in here.`}
        </Text>
        <Text style={styles.text}>
          {`To book new lessons, choose a spot below for a free introductory session`}
        </Text>
        <Schedule />
        <StatusBar style="auto" />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,' + bgDim + ')',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'economica',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});