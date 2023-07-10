import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image, SafeAreaView, Pressable, useFonts } from 'react-native';
import { economica_400Regular, economica_700Bold } from '@expo-google-fonts/economica';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/lmss-logo.png')}
        resizeMode='contain'/>
      <Text style={styles.text}>Welcome to the String School mobile app!!</Text>
      <Pressable style={[styles.monHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Monday, July 10th</Text>
      </Pressable>
      <Pressable style={[styles.tuesHeader,  styles.dateHeaders]}>
        <Text style={styles.headerText}>Tuesday, July 11th</Text>
      </Pressable>
      <Pressable style={[styles.wedHeader,  styles.dateHeaders]}>
        <Text style={styles.headerText}>Wednesday, July 12th</Text>
      </Pressable>
      <Pressable style={[styles.thursHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Thursday, July 13th</Text>
      </Pressable>
      <Pressable style={[styles.sunHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Sunday, July 16th</Text>
      </Pressable>
      <Pressable style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo:{
    width: '85%',

  },
  text:{
    color: 'white',
    fontSize: 20,
  },
  dateHeaders:{
    width: '85%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 5,
    borderStyle: 'solid',
    marginVertical: 10,
  },
  headerText:{
    fontSize: 30,
    color: 'white',
  },
  monHeader:{
    borderColor: '#147095',
  },
  monBooked:{
  },
  monOpen:{
  },
  tuesHeader:{
    borderColor: '#2fc02d',
  },
  tuesBooked:{
  },
  tuesOpen:{
  },
  wedHeader:{
    borderColor: '#ff2d2b',
  },
  wedBooked:{
  },
  wedOpen:{
  },
  thursHeader:{
    borderColor: '#ffb62b',
  },
  thursBooked:{
  },
  thursOpen:{
  },
  sunHeader:{
    borderColor: '#a64d79',
  },
  sunBooked:{
  },
  sunOpen:{
  },
  bookedText:{
    fontSize: 20,
  }
});
