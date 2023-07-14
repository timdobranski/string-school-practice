import SignIn from './SignIn';
import { Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const SignupNew = () => {

  return (
    <ImageBackground
      source={require('../../../assets/images/backgroundVerticalDimmer.jpg')}
      style={styles.backgroundImage}
      resizeMode='cover'>
      <ScrollView contentContainerStyle={styles.container}>


        <Text style={styles.text}>{ `Sign In`}
        </Text>



        <SignIn />

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
    fontSize: 35,
    fontFamily: 'economica',
    marginTop: 30,
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
  }
});

export default SignupNew;