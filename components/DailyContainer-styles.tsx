// components/DailyContainer-styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 200, // 높이를 적절히 설정
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    padding: 20,
    elevation: 5, // 안드로이드에서 그림자 효과 추가
  },
  content: {
    flex: 1,
    height:100,
    backgroundColor: '#111111',
    // Your content styles here
  },
});
