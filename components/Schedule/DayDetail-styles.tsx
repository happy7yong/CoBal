// DayDetail-styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    totalContainer:{
        justifyContent:'center',
        alignItems:'center',
        },

    inner:{
            width : '100%',
//             height : 150,
            padding: 40,
            flexDirection:'row',
            justifyContent: 'space-between',

            alignItems:'center',
        },
  dayDetailContainer: {
//       borderWidth:1,
      flex:1,
      height : 60,
  },
  dayDetailTitle1: {
    fontSize: 18,
    color:'#111111',
        fontSize:21,
  },
  dayDetailTitle2: {
      fontSize: 21,
      fontWeight:'bold',
      color:'#111111',
    },
  dayDetailText: {
    fontSize: 16,
    color: '#333',
  },

  MakeAppoint:{
      backgroundColor:'#444444',
      width:100,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 50,
      margin:'auto',
      },
  MAText:{
      color:'#FFFFFF',
      },
    appointSchedule :{
        backgroundColor:'#F6F6F6',
        width:320,
        height:'auto',
        justifyContent:'center',
        padding:15,
        borderRadius:16,
        margin:5,

        },
    appointText:{
        fontWeight:'bold',
        color:'black',
        }



});
