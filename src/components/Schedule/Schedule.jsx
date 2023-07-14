import { Text, View, Pressable } from 'react-native';
import styles from './scheduleStyling.js';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Schedule () {
  const navigation = useNavigation();

  const navigateToSignupNew = () => {
    navigation.navigate('New User Signup');
  };

  return (
    // <ScrollView style={styles.scrollView}>
      <View style={styles.contentContainer}>
        <View style={styles.nav}>
          <Pressable style={styles.navLeft}>
            <Ionicons name="arrow-back-circle" size={50} color="white" />
          </Pressable>

        <Text style={[styles.navCenter]}>July 10th - July 17th</Text>

        <Pressable style={styles.navRight}>
        <Ionicons name="arrow-forward-circle" size={50} color="white" />
        </Pressable>
        </View>

      <Pressable style={[styles.monHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Monday, July 10th</Text>
      </Pressable>
      <Pressable style={styles.row} onPress={navigateToSignupNew}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.monOpen, styles.cell]}>Open!</Text>
      </Pressable>


      <Pressable style={[styles.tuesHeader,  styles.dateHeaders]}>
        <Text style={styles.headerText}>Tuesday, July 11th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.tuesOpen, styles.cell]}>Open!</Text>
      </Pressable>


      <Pressable style={[styles.wedHeader,  styles.dateHeaders]}>
        <Text style={styles.headerText}>Wednesday, July 12th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.wedOpen, styles.cell]}>Open!</Text>
      </Pressable>


      <Pressable style={[styles.thursHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Thursday, July 13th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.thursOpen, styles.cell]}>Open!</Text>
      </Pressable>


      <Pressable style={[styles.sunHeader, styles.dateHeaders]}>
        <Text style={styles.headerText}>Sunday, July 16th</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:00</Text>
        <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>6:30</Text>
        <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:00</Text>
        <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={[styles.cell, styles.time]}>7:30</Text>
        <Text style={[styles.spot, styles.sunOpen, styles.cell]}>Open!</Text>
      </Pressable>
      </View>
  // </ScrollView>
  )
}
