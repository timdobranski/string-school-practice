import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image, SafeAreaView, Pressable, useFonts } from 'react-native';
import { economica_400Regular, economica_700Bold } from '@expo-google-fonts/economica';

export default function App() {
  const [fontsLoaded] = useFonts({
    economica_400Regular,
    economica_700Bold,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/lmss-logo.png')}
        resizeMode='contain'/>
      <Text style={styles.text}>Welcome to the String School mobile app!!</Text>
      <Pressable style={styles.monHeader}>
        <Text style={styles.headerText}>Monday, July 10th</Text>
      </Pressable>
      <Pressable style={styles.tuesHeader}>
        <Text style={styles.headerText}>Tuesday, July 11th</Text>
      </Pressable>
      <Pressable style={styles.wedHeader}>
        <Text style={styles.headerText}>Wednesday, July 12th</Text>
      </Pressable>
      <Pressable style={styles.thursHeader}>
        <Text style={styles.headerText}>Thursday, July 13th</Text>
      </Pressable>
      <Pressable style={styles.sunHeader}>
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
  header:{
    width: '85%',
    backgroundColor: 'black',

  },
  monHeader:{
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '#147095',
    backgroundColor: 'white',
  },
  monBooked:{
  },
  monOpen:{
  },
  tuesHeader:{

  },
  tuesBooked:{
  },
  tuesOpen:{
  },
  wedHeader:{

  },
  wedBooked:{
  },
  wedOpen:{
  },
  thursHeader:{

  },
  thursBooked:{
  },
  thursOpen:{
  },
  sunHeader:{

  },
  sunBooked:{
  },
  sunOpen:{
  },
  headerText:{
    fontSize: 30,
  },
  bookedText:{
    fontSize: 20,
  }
});
