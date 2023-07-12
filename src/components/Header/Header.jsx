import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

export default function Header () {

  return (
    // <View style={styles.headerContainer}>

      <Image
          style={styles.logo}
          source={require('../../../assets/images/lmss-logo.png')}
          resizeMode='stretch'
          resizeMethod='resize'
        />
        // <Text></Text>

    // </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    aspectRatio: 5,
    height: '30%',
    flex:1,
    justifyContent: 'flex-start',
    paddingVertical: 20,
    backgroundColor: '#fff',


  },
  logo:{
    width: '90%',
    marginTop: 60,
    marginBottom: 20,
    aspectRatio: 5,
    height: '30%',
    flex:1,
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
});