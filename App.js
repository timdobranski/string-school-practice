import 'react-native-url-polyfill/auto';
import supabase from './supabase';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { SessionProvider } from './src/components/helpers/SessionContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GuestHome from './src/components/guest/GuestHome';
import UserHome from './src/components/users/UserHome';
import SignupNew from './src/components/guest/SignupNew';
import SignInView from './src/components/guest/SignInView';
import CheckEmail from './src/components/guest/CheckEmail';


const Stack = createStackNavigator();

const App = () => {
  // const [session, setSession] = useState(null);
  const [fontsLoaded] = useFonts({
    'economica': require('./assets/fonts/Economica/Economica-Regular.ttf'),
    'economica-bold': require('./assets/fonts/Economica/Economica-Bold.ttf'),
  });

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data }) => {
  //     console.log('Session set to: ', data.session);
  //     setSession(data.session);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  // }, []);

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
        <SessionProvider>
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
        </SessionProvider>
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

