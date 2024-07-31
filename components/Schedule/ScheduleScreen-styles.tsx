import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
          },
    mainText: {
      fontSize: 24,
      color:'#111111',
      padding: 20,
      fontWeight:'bold',
    },
    ScheduleHeader:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image:{
        position: 'absolute',
        width: '11%',
        resizeMode: 'contain',
        right:-150,
    },
    calender: {
      width: '100%',
      height: 200,
      backgroundColor: '#F6F6F9', // Example style
      justifyContent: 'center',
      alignItems: 'center',
    },
    currentText :{
        flexDirection:'colum',

        },
    monthText: {
        fontSize: 20,
        color:'#111111',

      },
  dayText:{
      fontSize: 30,
      color:'#111111',

      },

});
