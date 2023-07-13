import { ImageBackground } from 'react-native';

const Background = ( { Component }) => {
  <ImageBackground
  source={require('../../assets/images/backgroundVerticalDimmer.jpg')}
  // style={styles.backgroundImage}
  resizeMode='cover'
>
  <Component />
  </ImageBackground>
}

export default Background;