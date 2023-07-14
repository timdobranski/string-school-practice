import 'react-native-url-polyfill/auto';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import GuestHome from './src/components/guest/GuestHome';
import UserHome from './src/components/users/UserHome';
import SignupNew from './src/components/guest/SignupNew';
import SignInView from './src/components/guest/SignInView';
import CheckEmail from './src/components/guest/CheckEmail';


const App = () => {
  const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    'economica': require('./assets/fonts/Economica/Economica-Regular.ttf'),
    'economica-bold': require('./assets/fonts/Economica/Economica-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/images/backgroundVerticalDimmer.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Guest Home'
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Guest Home" component={GuestHome} />
              <Stack.Screen name="New User Signup" component={SignupNew} />
              <Stack.Screen name="Sign In" component={SignInView} />
              <Stack.Screen name="Check Email" component={CheckEmail} />
              <Stack.Screen name="User Home" component={UserHome} />
            </Stack.Navigator>
          </NavigationContainer>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
  },
});

export default App;

