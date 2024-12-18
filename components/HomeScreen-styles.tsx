import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA', // HomeScreen의 배경 색상 설정
  },
  coBalImage: {
    width: 500, // 이미지의 너비 설정
    height: 500, // 이미지의 높이 설정
    resizeMode: 'contain', // 이미지 비율 유지
    position: 'absolute',
    top: 70, // 화면의 상단에서 50픽셀 떨어지도록 설정 (원하는 대로 조정 가능)
  },
  settingsScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // SettingsScreen의 배경 색상 설정
  },
  scheduleScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // ScheduleScreen의 배경 색상 설정
  },

  tabBarIconStyle: {
      alignSelf: 'center', // 아이콘을 중앙에 배치
  },


  //최상단의 고객 기분
  textContainer: {
      position: 'absolute',
      bottom: 50, // 화면의 하단에서 50픽셀 떨어지도록 설정 (원하는 대로 조정 가능)
      alignItems: 'flex-start',
      position: 'absolute',
      top:50,
      left:20
    },
    mainText: {
      fontSize: 30, // "윤애남님"의 폰트 크기
      fontWeight: 'Light', // 폰트 두께를 두껍게 설정
      color:'#111111'
    },
    subText: {
      fontSize: 30, // "기분이 좋아요"의 폰트 크기
      fontWeight: 'bold', // 폰트 두께를 두껍게 설정
      marginTop: 5, // "기분이 좋아요"의 상단 여백 설정
      color:'#111111'
    },



//점심드시고 혈압약 안드셨어요!
    homeAlarmImage:{
        position:'relative',
        width:'70%',
        resizeMode: 'contain',
        right:51,
        top:180,
    },
    homeAlarmContainer:{ //이미지 말고 가장 큰 상자
        flexDirection: 'row', // 수평으로 배치
        width:250,
        right:58,
        top:41,
        alignItems: 'center',
        justifyContent: 'center',
//         backgroundColor: '#F5F7FA',
    },
    alarm : {
            position:'relative',
            justifyContent:'center',
            alignItems:'center',

            width:70,
            height:70,
            marginRight:10,

            backgroundColor: '#FFFFFF',
            borderRadius: 100,
            borderColor: '#DEDEDE',
            borderWidth:1,
        },
    newAlarm:{
        zIndex:1,
        position: 'absolute',
        width:12,
        height:12,
        backgroundColor:'#FFAF36',
        borderRadius:30,
        top:14,
        right:19,
    },
    topNavi:{
            width:'80%',
            resizeMode: 'contain',
    },
    topNavi1:{
        width:'80%',
        resizeMode: 'contain',
        alignItems:'center',

    },
    alarmTextContainer:{
        alignItems:'flex-start',
        justifyContent: 'center',

    },
    alarmMainText:{
            fontSize:17,
            color: '#111111',

    },
    alarmSubText:{
            fontSize:17,
            fontWeight:'bold',
            color: '#111111'
    },


//메인알림 슬라이드
    dailyContainer:{
        width:'93%',
        borderRadius:42,
        borderColor: '#E7E7E7',
        borderWidth:1.5,
        height: 170,
        bottom: -60,
        backgroundColor:'#FFFFFF',
        padding:30,

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'between-space',
    },
    dailyTextContainer:{
        marginRight:15,

    },

    dailyTextTime : {
        fontSize: 16,
        color: '#111111',
        fontWeight: '400',
        },

    dailyTextDate:{
        fontSize:40,
        color: '#111111',
        fontWeight: '500',
        },


    //메인inner
      inner: {
        width: '62%',
        height: '110%',
        backgroundColor: '#F6F6F6',
        borderRadius: 30,

        margin: 11,
        padding: 11,
        paddingBottom:20,
        alignItems:'center',
        justifyContent:'center',

      },
      dailyInner: {
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageInner: {
        flexDirection: 'row',
        alignItems: 'center', // Y축 정렬
        //paddingLeft:10,
      },
  /*
  imageSunflowerPa:{
      width:'20px',
      },*/
      SunFlowerImage: {
          width:'30%',
          height:'50%',
        borderRadius: 200,
        marginRight: 10, // 이미지와 텍스트 사이의 여백
        resizeMode:'cover'


      },
        dailyTextFont:{
//             fontSize: 18,
            color:'#111111',
            },

       LikeContainer:{
           backgroundColor: '#FFFFFF',
           paddingLeft:10,
           paddingRight:10,
           height:40,
           borderRadius:50,
           alignSelf: 'flex-end',  // 위쪽에 배치
           borderWidth:1.5,

           borderColor:'#EFEFEF',
           flexDirection:'row',
           justifyContent:'center',
           alignItems:'center',
           },
       favoriteHeart:{
           width:20,
           resizeMode:'contain',
           margin:2,
           },

       recognizedText:{
           width:'100%',
           height:'100%',
           fontSize:10,
           },

    voiceImage: {
        width: '50%',
        resizeMode: 'contain', // 이미지 비율 유지
    },
    openai:{

        justifyContent: 'center',
        alignItems: 'center',
        top:-50,
        left:150,
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#E8E8E8',



    },
    openaiImage:{
        width:'80%',
        height:'60%',



        },

       voiceIcon: {
           position: 'absolute',
           width: 180,
           height: 180,
           left:10,
           resizeMode:'center',
           zIndex:10,
         },

         voiceOnIcon: {
             position: 'absolute',
           height: 200,
//            left:5,

         },
     voiceOnImage:{
         width:133,
          height:133,
          left:-13,

         },
     dailyTextInner:{
         width:'70%',
         height: '150%',
         alignItems : 'center',
         justifyContent: 'center',

        },
         recordButton: {
           width: 70,
           height: 70,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: '#f44336',
           borderRadius: 30,
           marginVertical: 20,
           top:100,
           left:-100,
         },
         recordButtonText: {
           color: '#fff',
           fontSize: 16,
           fontWeight: 'bold',
         },

    //이너 안의 좋아요버튼
    likeCounterContainer:{
        width:'100px',
//         backgroundColor: '#FFFFFF',
        },

    likeCounter:{
        padding:'10px',
        borderRadius:'100px',
        },
});