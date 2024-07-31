import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
      flex: 1,
//       justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#FFFFFF',
          },
    mainText: {
      fontSize: 22,
      marginBottom: 20,
      color:'#111111',
      fontWeight:'bold',
    },
    ScheduleHeader:{
        justifyContent: 'center',
    },
    Image:{
        position: 'absolute',
        width: '10%',
        resizeMode: 'contain',
        right:100,
    },


    calender: {
      width: '100%',
      height: 300,
      backgroundColor: '#F6F6F9', // Example style
    },

});
