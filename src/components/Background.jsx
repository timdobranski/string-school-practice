import { ImageBackground, StyleSheet } from 'react-native';

const Background = ( { Component }) => {
  <ImageBackground
  source={require('./assets/images/backgroundVerticalDimmer.jpg')}
  style={styles.backgroundImage}
  resizeMode='cover'
>
  <Component />
  </ImageBackground>
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

export default Background;