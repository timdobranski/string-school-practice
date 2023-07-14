import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import supabase from './supabase';
import { Session } from '@supabase/supabase-js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GuestHome from './src/components/guest/GuestHome';
import UserHome from './src/components/users/UserHome';
import SignupNew from './src/components/guest/SignupNew';
import SignInView from './src/components/guest/SignInView';
//import Background from './src/components/Background';

const bgDim = process.env.EXPO_PUBLIC_BG_DIM;
const Stack = createStackNavigator();

const App = () => {
  const [session, setSession] = useState(null);
  const [fontsLoaded] = useFonts({
    'economica': require('./assets/fonts/Economica/Economica-Regular.ttf'),
    'economica-bold': require('./assets/fonts/Economica/Economica-Bold.ttf'),
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log('Session set to: ', data.session);
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/backgroundVerticalDimmer.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        <NavigationContainer>
          <Stack.Navigator>
            {session && session.user ? (
              <Stack.Screen name="User Home">
                {(props) => <UserHome {...props} session={session} />}
              </Stack.Screen>
            ) : (
              <Stack.Screen name="Guest View" component={GuestHome} />
            )}
            <Stack.Screen name="New User Signup" component={SignupNew} />
            <Stack.Screen name="Sign In" component={SignInView} />
            <Stack.Screen name="User Home" component={UserHome} />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
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

