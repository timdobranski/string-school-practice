const goTo = {
  SignIn: (navigation) => {
    console.log('Going to Sign In');
    navigation.navigate('Sign In');
  },
  UserHome: (navigation) => {
    console.log('Going to User Home');
    navigation.navigate('User Home');
  },
  GuestHome: (navigation) => {
    console.log('Going to Guest Home');
    navigation.navigate('Guest Home');
  },
  CheckEmail: (navigation) => {
    console.log('Going to Check Email');
    navigation.navigate('Check Email');
  }
};

export default goTo;