import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import Schedule from './src/components/Schedule/Schedule';
// import supabase from './supabase.js';

export default function App() {
  // Font handling
  const [fontsLoaded] = useFonts({
    'economica': require('./assets/fonts/Economica/Economica-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }


  return (
    <View >
      <Image
        source={require('./assets/images/backgroundVerticalDimmer.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      />
      <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/images/lmss-logo.png')}
          resizeMode='stretch'
          resizeMethod='resize'
        />
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
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  logo:{
    width: '90%',
    marginTop: 60,
    marginBottom: 20,
    aspectRatio: 5,
    height: '30%',
    flex:1,
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  // nav:{
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   textAlign: 'center',
  // },
  // navLeft:{
  //   color: 'white',
  //   fontSize: 40,
  //   marginRight: 40,
  // },
  // navCenter:{
  //   color: 'white',
  //   fontSize:30,
  //   textAlign: 'center',
  // },
  // navRight:{
  //   color: 'white',
  //   fontSize: 40,
  //   marginLeft: 40,
  // },
  text:{
    color: 'white',
    fontSize: 22,
    fontFamily: 'economica',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  // signInButton:{
  //   textAlign: 'center',
  //   backgroundColor: '#147095',
  //   alignItems: 'center',
  // },
  // signInText:{
  //   color: 'white',
  //   textAlign: 'center',
  //   alignItems: 'center',
  // },
  // dateHeaders:{
  //   width: '75%',
  //   backgroundColor: 'black',
  //   alignItems: 'center',
  //   borderWidth: 10,
  //   borderStyle: 'solid',
  //   borderRadius: 3,
  //   marginTop: 20,
  //   marginBottom: 0,
  //   paddingVertical: 8,
  // },
  // headerText:{
  //   fontFamily: 'economica',
  //   fontSize: 26,
  //   color: 'white',
  // },
  // row:{
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   textAlign: 'center',
  //   fontFamily: 'economica',

  // },
  // cell:{
  //   fontFamily: 'economica',
  //   fontSize: 22,
  //   borderWidth: 1,

  // },
  // spot:{
  //   width: '55%',
  //   textAlign: 'center',
  // },
  // time:{
  //   backgroundColor: 'white',
  //   width: '10%',
  //   textAlign: 'center',
  // },
  // monHeader:{
  //   borderColor: '#147095',
  // },
  // monBooked:{
  // },
  // monOpen:{
  //   backgroundColor: '#9fc5e8',
  // },
  // tuesHeader:{
  //   borderColor: '#2fc02d',
  // },
  // tuesBooked:{
  // },
  // tuesOpen:{
  //   backgroundColor: '#b1fcb0'
  // },
  // wedHeader:{
  //   borderColor: '#ff2d2b',
  // },
  // wedBooked:{
  // },
  // wedOpen:{
  //   backgroundColor: '#ea9999'
  // },
  // thursHeader:{
  //   borderColor: '#ffb62b',
  // },
  // thursBooked:{
  // },
  // thursOpen:{
  //   backgroundColor: '#fff2cc'
  // },
  // sunHeader:{
  //   borderColor: '#a64d79',
  // },
  // sunBooked:{
  // },
  // sunOpen:{
  //   backgroundColor: '#d5a6bd'
  // },
  // bookedText:{
  //   fontSize: 20,
  // },
  // footer:{
  //   margin: 20,
  //   padding: 20
  // }
});
