import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions } from 'react-native';

export default function App() {

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/lmss-logo.png')}
        resizeMode='contain'/>
      <Text style={styles.text}>Welcome to the String School mobile app!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: '85%',
    position: 'absolute',
    top: 0,
  },
  text:{
    color: 'white',
    fontSize: 20,
  }
});
