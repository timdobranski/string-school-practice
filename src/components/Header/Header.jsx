import { Image, StyleSheet, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/lmss-logo.png')}
        resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '85%',
    aspectRatio: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
});
