import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

export default function Header () {

  return (
      <Image
          style={styles.logo}
          source={require('../../../assets/images/lmss-logo.png')}
          resizeMode='stretch'
          resizeMethod='resize'
      />
  )
}

// const styles = StyleSheet.create({
//   headerContainer:{
//     width: '100%',
//     marginTop: 40,
//     marginBottom: 20,
//     aspectRatio: 5,
//     height: '30%',
//     flex:1,
//     justifyContent: 'center',
//     paddingVertical: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   logo:{
//     width: '90%',
//     marginTop: 60,
//     marginBottom: 20,
//     aspectRatio: 5,
//     height: '30%',
//     flex:1,
//     justifyContent: 'flex-start',
//     paddingVertical: 20,
//   },
// });

const styles = StyleSheet.create({
  headerContainer: {
    // width: '80%',
    marginTop: 40,
    marginBottom: 20,
    aspectRatio: 5,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    width: '-50%',
    aspectRatio: 5,
    resizeMode: 'contain',
    alignItems: 'center',
    height: '5%',
    marginTop: 60,
    marginBottom: 20,
  },
});