import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './ScheduleScreen-styles';

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
