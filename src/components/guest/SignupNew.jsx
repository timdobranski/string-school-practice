import SignUp from './SignUp';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const SignupNew = () => {
  const navigation = useNavigation();

  const goToGuestHome = () => navigation.navigate('Guest Home');

  return (
    <ImageBackground
      source={require('../../../assets/images/backgroundVerticalDimmer.jpg')}
      style={styles.backgroundImage}
      resizeMode='cover'>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable onPress={goToGuestHome} style={styles.backContainer}>
          <Ionicons name="arrow-back-circle" size={50} color="white" />
          {/* <Text style={styles.text}>{ `To schedule`}</Text> */}
        </Pressable>

        <View style={styles.spotContainer}>
          <Text style={styles.spotText}>Monday, July 10th @ 7:00</Text>
        </View>

        <Text style={styles.text}>{ `To book this spot for a free intro session, please fill in the fields below.\n
This info is collected to allow for communication before your intro session, but once signed up you'll\
 also be able to access the rest of the app.`}
        </Text>



        <SignUp />

      </ScrollView>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'start',
    alignItems: 'center',

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'economica',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  spotContainer: {
    width: '75%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 10,
    borderStyle: 'solid',
    borderRadius: 3,
    marginVertical: 30,
    paddingVertical: 8,
    borderColor: '#147095',
    justifyContent: 'center',
  },
  spotText: {
    color: 'white',
    fontFamily: 'economica',
    fontSize: 30,
  },
  backContainer: {
    marginTop: 20
  }
});

export default SignupNew;