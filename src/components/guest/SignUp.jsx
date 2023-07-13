import React, { useState } from 'react'
import { Alert, StyleSheet, View, ScrollView, Switch, Text } from 'react-native'
import  supabase  from '../../../supabase'
import { Button, Input } from 'react-native-elements'

export default function Auth() {
  const [isParent, setIsParent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentName, setStudentName] = useState('');
  const [notes, setNotes] = useState('');
  const [communicationPreference, setCommunicationPreference] = useState('');

  // async function signInWithEmail() {
  //   setLoading(true)
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email: email,
  //     password: password,
  //   })

  //   if (error) Alert.alert(error.message)
  //   setLoading(false)
  // }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.signupHeaderContainer]}>
      <Text style={styles.signupHeaderText}>Are you a student, or a parent/guardian?</Text>
      <Switch
        value={isParent}
        onValueChange={(value) => setIsParent(value)}
        trackColor={{ false: '#9fc5e8', true: '#9fc5e8' }}
        thumbColor={isParent ? '##147095' : '#147095'}
        ios_backgroundColor="#9fc5e8"
      />
      <Text style={[styles.signupHeaderText, styles.signupType]}>{isParent ? `Parent/Guardian Signup` : `Student Signup`}</Text>
      {isParent ? <Text style={[styles.signupHeaderText, styles.finePrint]}>{'(if your kiddo is older, they can still sign up separately later)'}</Text> : null}
    </View>
  {isParent ? (
    <View>
      <View style={[styles.verticallySpaced]}>
        <Input
          label="Student Name"
          labelStyle={styles.label}
          onChangeText={(text) => setStudentName(text)}
          value={studentName}
          placeholder="rockstar in training"
          autoCapitalize="words"
        />
      </View>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Your Name"
          labelStyle={styles.label}
          onChangeText={(text) => setName(text)}
          value={studentName}
          placeholder="future rockstar owes it all to..."
          autoCapitalize="words"
        />
      </View>

<View style={[styles.verticallySpaced]}>
        <Input
          label="Email"
          labelStyle={styles.label}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
    <View style={styles.verticallySpaced}>
      <Input
        label="Phone"
        labelStyle={styles.label}
        onChangeText={(text) => setPhone(text)}
        value={phone}
        placeholder="Enter phone number"
        autoCapitalize="none"
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
        />
      </View>

      <View style={[styles.verticallySpaced ]}>
        <Input
          label="Communication Preference"
          labelStyle={styles.label}
          onChangeText={(text) => setCommunicationPreference(text)}
          value={email}
          placeholder="email, text, or phone"
          autoCapitalize={'none'}
        />
      </View>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Notes"
          labelStyle={styles.label}
          onChangeText={(text) => setNotes(text)}
          value={email}
          placeholder="anything you'd like me to know?"
          autoCapitalize={'none'}
        />
      </View>

  </View>
):  <View >
      <View style={[styles.verticallySpaced]}>
        <Input
          label="Name"
          labelStyle={styles.label}
          onChangeText={(text) => setName(text)}
          value={email}
          placeholder="rockstar in training"
          autoCapitalize={'none'}
        />
      </View>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Email"
          labelStyle={styles.label}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Phone"
          labelStyle={styles.label}
          onChangeText={(text) => setPhone(text)}
          value={email}
          placeholder="enter phone number"
          autoCapitalize={'none'}
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
        />
      </View>

      <View style={[styles.verticallySpaced ]}>
        <Input
          label="Communication Preference"
          labelStyle={styles.label}
          onChangeText={(text) => setCommunicationPreference(text)}
          value={email}
          placeholder="email, text, or phone"
          autoCapitalize={'none'}
        />
      </View>

      <View style={[styles.verticallySpaced]}>
        <Input
          label="Notes"
          labelStyle={styles.label}
          onChangeText={(text) => setNotes(text)}
          value={email}
          placeholder="anything you'd like me to know?"
          autoCapitalize={'none'}
        />
      </View>
    </View>
  }
      {/* <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
      </View> */}
      <View style={styles.verticallySpaced}>
        <Button title="Schedule My Intro Session" disabled={loading} onPress={() => signUpWithEmail()} />
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