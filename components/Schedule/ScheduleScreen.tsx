import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './ScheduleScreen-styles';

// 현재 날짜와 시간 가져오기
const currentDate = new Date();

// 월 추출 (0부터 11까지의 값이므로 1을 더합니다)
const currentMonth = currentDate.getMonth() + 1;

console.log(`현재 월: ${currentMonth}`);

const ScheduleScreen: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.ScheduleHeader}>
     <Text style={styles.mainText}>일정</Text>
              <Image
                   source={require('../../assets/png/top-navi.png')} // 올바른 상대 경로로 변경
                   style={styles.Image}
                 />
    </View>
    <View style={styles.calender}>
    </View>
  </View>
);

export default ScheduleScreen;
