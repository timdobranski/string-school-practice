import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import supabase from './supabase.js';

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
        source={require('./assets/images/backgroundVerticalDim.jpg')}
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

      {/* <Text style={styles.weekOf}>Week of:</Text> */}
      <Pressable style={styles.nav}>
        <Text style={[styles.navLeft]}>{'<'}</Text>
        <Text style={[styles.navCenter]}>7/10 - 7/17</Text>
        <Text style={styles.navRight}>{'>'}</Text>
      </Pressable>

      <Pressable style={[styles.monHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Monday, July 10th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
      </Pressable>


      <Pressable style={[styles.tuesHeader,  styles.dateHeaders]}>
        <Text style={styles.headerText}>Tuesday, July 11th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
      </Pressable>


      <Pressable style={[styles.wedHeader,  styles.dateHeaders]}>
        <Text style={styles.headerText}>Wednesday, July 12th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
      </Pressable>


      <Pressable style={[styles.thursHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Thursday, July 13th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
      </Pressable>


      <Pressable style={[styles.sunHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Sunday, July 16th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style="auto" />
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
  weekOf:{
    color: 'white',
    marginBottom: 0,
    fontFamily: 'economica',
    fontSize: 25,
  },
  nav:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  navLeft:{
    color: 'white',
    fontSize: 40,
    marginRight: 40,
  },
  navCenter:{
    color: 'white',
    fontSize:30,
    textAlign: 'center',
  },
  navRight:{
    color: 'white',
    fontSize: 40,
    marginLeft: 40,
  },
  text:{
    color: 'white',
    fontSize: 22,
    fontFamily: 'economica',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  signInButton:{
    textAlign: 'center',
    backgroundColor: '#147095',
    alignItems: 'center',
  },
  signInText:{
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  dateHeaders:{
    width: '75%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 10,
    borderStyle: 'solid',
    marginTop: 20,
    marginBottom: 0,
    paddingVertical: 8,
  },
  headerText:{
    fontFamily: 'economica',
    fontSize: 26,
    color: 'white',
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'economica',
  },
  cell:{
    fontFamily: 'economica',
    fontSize: 22,
    borderWidth: 1
  },
  spot:{
    width: '55%',
    textAlign: 'center',
  },
  time:{
    backgroundColor: 'white',
    width: '10%',
    textAlign: 'center',
  },
  monHeader:{
    borderColor: '#147095',
  },
  monBooked:{
  },
  monOpen:{
    backgroundColor: '#9fc5e8',
  },
  tuesHeader:{
    borderColor: '#2fc02d',
  },
  tuesBooked:{
  },
  tuesOpen:{
    backgroundColor: '#b1fcb0'
  },
  wedHeader:{
    borderColor: '#ff2d2b',
  },
  wedBooked:{
  },
  wedOpen:{
    backgroundColor: '#ea9999'
  },
  thursHeader:{
    borderColor: '#ffb62b',
  },
  thursBooked:{
  },
  thursOpen:{
    backgroundColor: '#fff2cc'
  },
  sunHeader:{
    borderColor: '#a64d79',
  },
  sunBooked:{
  },
  sunOpen:{
    backgroundColor: '#d5a6bd'
  },
  bookedText:{
    fontSize: 20,
  },
  footer:{
    margin: 20,
    padding: 20
  }
});
