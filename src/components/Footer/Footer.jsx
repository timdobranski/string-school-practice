import {View, Text, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';



export default function Footer () {

  return (
    <View style={styles.footerContainer}>

      {/* <View style={styles.iconContainer}>
        <FontAwesome name="home" style={styles.icons} />
        <Text style={styles.text}>Home</Text>
      </View> */}

      <View style={styles.iconContainer}>
        <AntDesign name="calendar" style={styles.icons}  />
        <Text style={styles.text}>Scheduling</Text>
      </View>

      <View style={styles.iconContainer}>
        <AntDesign name='creditcard' style={styles.icons}  />
        <Text style={styles.text}>Payments</Text>
      </View>

      <View style={styles.iconContainer}>
        <MaterialIcons name="timer" style={styles.icons}  />
        <Text style={styles.text}>Practice</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="line-chart" style={styles.icons}  />
        <Text style={styles.text}>Progress</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="user-circle" style={styles.icons}  />
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