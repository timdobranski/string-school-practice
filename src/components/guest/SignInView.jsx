import SignIn from './SignIn';
import { Text, ImageBackground, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

const SignupNew = () => {
  const navigation = useNavigation();
  const goToGuestHome = () => {
    navigation.navigate('Guest Home');
  };

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

        <Text style={styles.text}>{ `Sign In`}</Text>


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
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  }
});

export default SignupNew;