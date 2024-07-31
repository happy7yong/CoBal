// components/HomeScreen.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './HomeScreen-styles'; // styles.ts 파일 import



const HomeScreen: React.FC = () => (
  <View style={styles.homeScreenContainer}>
    <Image
      source={require('../assets/png/coBal.png')} // 올바른 상대 경로로 변경
      style={styles.coBalImage}
    />
    <View style={styles.textContainer}>
      <Text style={styles.mainText}>윤애남님은</Text>
      <Text style={styles.subText}>기분이 좋아요</Text>
      <Image
        source={require('../assets/png/voice.png')} // 올바른 상대 경로로 변경
        style={styles.voiceImage}
      />
    </View>
    <Image
      source={require('../assets/png/homealarm.png')} // 올바른 상대 경로로 변경
      style={styles.homeAlarmImage}
    />
    <View style={styles.homeAlarmContainer}>
      <View style={styles.alarm}>
      <View style={styles.newAlarm}>
              </View>
        <Image
          source={require('../assets/png/top-navi.png')} // 올바른 상대 경로로 변경
          style={styles.topNavi}
        />
      </View>
      <View style={styles.alarmTextContainer}>
        <Text style={styles.alarmMainText}>점심드시고</Text>
        <Text style={styles.alarmSubText}>혈압약 안드셨어요!</Text>
      </View>
    </View>
    <View style={styles.dailyContainer}>
        <View style={styles.dailyTextContainer}>
                <Text style={styles.dailyTextTime}>AM 10:00</Text>
                <Text style={styles.dailyTextDate}>07/29</Text>
            </View>
               <View style={styles.inner}>
               <View style={styles.dailyInner}>
                <View style={styles.imageInner}>
                    <Image
                              source={require('../assets/png/Sunflower-image.png')} // 올바른 상대 경로로 변경
                              style={styles.SunFlowerImage}
                            />
                    <View style={styles.dailyText}>
                        <Text style={styles.dailyText.Text}>해바라기를 선물로 받아 봤으면 했어요.</Text>
                    </View>
                 </View>
                </View>
        </View>
    </View>
  </View>
);

export default HomeScreen;
