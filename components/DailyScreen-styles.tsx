import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // 화면의 너비와 높이를 가져옴

export const styles = StyleSheet.create({
  dailyScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
     width : 100,
     height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'cover', // 이미지 비율을 유지하며 컨테이너에 맞춤
  },

  indicatorContainer: {
    position: 'absolute',
    top:320,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor:'#444444',
    opacity:0.8,
    padding:5,
    borderRadius: 50,
  },
  indicator: {
    width: 10,
    height: 8,
    borderRadius: 10,
    margin: 5,
  },
  dailyContainer: {
      width: '90%',
      borderRadius: 42,
      borderColor: '#E7E7E7',
      borderWidth: 1.5,
      height: 200,

      margin:10,
      backgroundColor: '#FFFFFF',
      padding: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

  scrollViewContainer: {
    alignItems: 'center',
    height:'150%',
  },

  flatList: {
      flex: 1,
    },
    flatListContent: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlayContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: 200, // 초기 높이 설정
    },
    absolute: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },



});
