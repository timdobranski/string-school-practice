import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.iconContainer}>
        <AntDesign name="calendar" style={styles.icons} />
        <Text style={styles.text}>Scheduling</Text>
      </View>

      <View style={styles.iconContainer}>
        <AntDesign name='creditcard' style={styles.icons} />
        <Text style={styles.text}>Payments</Text>
      </View>

      <View style={styles.iconContainer}>
        <MaterialIcons name="timer" style={styles.icons} />
        <Text style={styles.text}>Practice</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="line-chart" style={styles.icons} />
        <Text style={styles.text}>Progress</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="user-circle" style={styles.icons} />
        <Text style={styles.text}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: '100%',
    borderTopWidth: 1, // Use borderTopWidth instead of border
    borderTopColor: 'white', // Use borderTopColor instead of borderColor
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Align the footer to the bottom
  },
  iconContainer: {
    flex: 1, // Distribute equal width to each icon container
    alignItems: 'center',
    paddingVertical: 10, // Adjust the padding as needed
  },
  icons: {
    color: 'white',
    fontSize: 35,
  },
  text: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5, // Adjust the margin as needed
  },
});
