import {View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Footer () {

  return (
    <View style={styles.footerContainer}>

      {/* <View style={styles.iconContainer}>
        <FontAwesome name="home" style={styles.icons} />
        <Text style={styles.text}>Home</Text>
      </View> */}

      <View style={styles.iconContainer}>
        <FontAwesome name="calendar" style={styles.icons}  />
        <Text style={styles.text}>Schedule</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name='dollar' style={styles.icons}  />
        <Text style={styles.text}>Payments</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="check" style={styles.icons}  />
        <Text style={styles.text}>Practice</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="list" style={styles.icons}  />
        <Text style={styles.text}>Progress</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="user" style={styles.icons}  />
        <Text style={styles.text}>Profile</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: '100%',
    border: 'solid',
    borderColor: 'white',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    textAlign: 'center',
    border: 'solid',
    borderColor: 'white',
  },
  icons: {
    color: 'white',
    fontSize: 35,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    // fontFamily: 'economica',
    marginHorizontal: 14,
    marginBottom: 20,
    textAlign: 'center',
    width: '100%'
  }
});