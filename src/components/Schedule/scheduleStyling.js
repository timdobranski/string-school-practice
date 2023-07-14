import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scheduleContainer:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: '75%',
  },
  nav:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  navLeft:{
    color: 'white',
    fontSize: 40,
    marginRight: 40,
  },
  navCenter:{
    color: 'white',
    fontSize:30,
    fontFamily: 'economica',
    textAlign: 'center',
  },
  navRight:{
    color: 'white',
    fontSize: 40,
    marginLeft: 40,
  },
  text:{
    color: 'white',
    fontSize: 22,
    fontFamily: 'economica',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  signInButton:{
    textAlign: 'center',
    backgroundColor: '#147095',
    alignItems: 'center',
  },
  signInText:{
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  dateHeaders:{
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 10,
    borderStyle: 'solid',
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 0,
    paddingVertical: 8,
  },
  headerText:{
    fontFamily: 'economica',
    fontSize: 26,
    color: 'white',
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'economica',

  },
  cell:{
    fontFamily: 'economica',
    fontSize: 24,
    borderWidth: 1,
    paddingVertical: 5,

  },
  spot:{
    width: '65%',
    textAlign: 'center',
  },
  time:{
    backgroundColor: 'white',
    width: '15%',
    textAlign: 'center',
  },
  monHeader:{
    borderColor: '#147095',
  },
  monBooked:{
  },
  monOpen:{
    backgroundColor: '#9fc5e8',
  },
  tuesHeader:{
    borderColor: '#2fc02d',
  },
  tuesBooked:{
  },
  tuesOpen:{
    backgroundColor: '#b1fcb0'
  },
  wedHeader:{
    borderColor: '#ff2d2b',
  },
  wedBooked:{
  },
  wedOpen:{
    backgroundColor: '#ea9999'
  },
  thursHeader:{
    borderColor: '#ffb62b',
  },
  thursBooked:{
  },
  thursOpen:{
    backgroundColor: '#fff2cc'
  },
  sunHeader:{
    borderColor: '#a64d79',
  },
  sunBooked:{
  },
  sunOpen:{
    backgroundColor: '#d5a6bd'
  },
  bookedText:{
    fontSize: 20,
  },
});

export default styles;