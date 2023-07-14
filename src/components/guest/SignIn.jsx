import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import  supabase  from '../../../supabase'
import { Button, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      Alert.alert(error.message)
    } else {
      console.log('SignIn navigating to User Home');
      navigation.navigate('User Home'); // Navigate to the 'UserHome' screen on successful sign-in
    }
    setLoading(false)
  }

  return (
    <View style={styles.container}>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Email"
          labelStyle={styles.label}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          color='white'
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          labelStyle={styles.label}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="at least 6 characters"
          autoCapitalize={'none'}
          color='white'
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    width: '100%',
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  label: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 22,
  },
  signupHeaderContainer: {
    alignItems: 'center',
  },
  signupHeaderText: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'economica',
    marginVertical: 10,
  },
  signupType: {
    color: '#2fc02d',
    fontFamily: 'economica-bold',
  },
  finePrint: {
    marginTop: 0,
    marginBottom: 20,
    fontSize: 18
  }
})