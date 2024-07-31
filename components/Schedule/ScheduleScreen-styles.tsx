// ScheduleScreen-styles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  mainText: {
    fontSize: 24,
    color: '#111111',
    padding: 20,
    fontWeight: 'bold',
  },
  ScheduleHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  Image: {
    position: 'absolute',
    width: '11%',
    resizeMode: 'contain',
    right: -150,
  },
  calender: {
    width: '100%',
    padding: 20,
    backgroundColor: '#F6F6F9',
    justifyContent:'center',
  },
  currentText: {
    flexDirection: 'colum',
    alignItems: 'center',
    marginBottom: 20,
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gradient: {
      flex:1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
  dayCell: {
    flex:1,
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderRadius:50,
    borderColor: '#E7E7E7',
    backgroundColor: '#FFFFFF',
    width: 50, // width for each day cell
    height: 80,
    marginHorizontal: 5,
  },

  yearText: {
    fontSize: 18,
    color: '#111111',
  },
  dayText: {
    fontSize: 25,
    color: '#111111',
    fontWeight: 'bold',
  },
  weekDayText:{
      color:'#111111',
      alignItems:'center',
        justifyContent:'center',
      },
    naviButton:{
        justifyContent:'center',
        alignItems:'center',

        },
  navigationButtons: {
      position: 'absolute',
      top:-75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    margin: 10,
    padding:10,
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    fontSize: 20,
  },

    currentContainer:{
        height:'100%',
        backgroundColor:'#111111',
        },
});