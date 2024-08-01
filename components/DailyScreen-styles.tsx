import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  dailyScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  flatListContainer: {
    height: 400, // FlatList의 높이를 조정
  },
  imageContainer: {
    width,
    height: '100%', // 부모의 높이를 채우도록 설정
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%', // 부모의 높이를 채우도록 설정
    resizeMode: 'cover',
  },
  indicatorContainer: {
    position: 'absolute',
    top: 350, // FlatList 높이에 따라 조정
     left: width / 2 - 35, // X축 중앙에 배치 (indicator 너비에 따라 조정)
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444444',
    opacity: 0.8,
    padding: 5,
    borderRadius: 50,
  },
  indicator: {
    width: 10,
    height: 8,
    borderRadius: 10,
    margin: 5,

  },
  dailyInner: {
    backgroundColor: '#F8F8F8',
    top: 0,
    height: '70%',
    alignItems: 'center',
  },
  innerBar: {
    backgroundColor: '#DBDBDB',
    width: 40,
    height: 5,
    marginTop: 13,
    borderRadius: 20,
  },
  dailyContainer: {
    margin: 20,
    padding: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightContainer: {
    backgroundColor: '#FFFFFF',
    width: '60%',
    borderColor: '#E7E7E7',
    height: 200,
  },
  dailyContentImage: {
    height: 200,
    width: '60%',
    resizeMode: 'cover',
  },
  scrollViewContainer: {
    alignItems: 'center',
    height: '120%',
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
    height: 200,
  },
});
