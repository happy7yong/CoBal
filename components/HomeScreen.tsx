// components/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Voice from 'react-native-voice';
import { styles } from './HomeScreen-styles'; // styles.ts 파일 import

const HomeScreen: React.FC = () => {
  const [recognizedText, setRecognizedText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  useEffect(() => {
    // Voice 설정 초기화
    Voice.onSpeechResults = (event) => {
      const results = event.value || [];
      setRecognizedText(results[0] || '');
    };

    Voice.onSpeechStart = () => {
      setIsListening(true);
    };

    Voice.onSpeechEnd = () => {
      setIsListening(false);
    };

    return () => {
      // 컴포넌트 언마운트 시 리스너 제거
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const handleButtonPress = async () => {
    if (isListening) {
      await Voice.stopRecognizing();
    } else {
      await Voice.start('ko-KR'); // 한국어로 음성 인식 시작
    }
  };

  return (
    <View style={styles.homeScreenContainer}>
      <Image
        source={require('../assets/png/coBal.png')} // 올바른 상대 경로로 변경
        style={styles.coBalImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>윤애남님은</Text>
        <Text style={styles.subText}>기분이 좋아요</Text>
        <TouchableOpacity style={styles.voiceBtn} onPress={handleButtonPress}>
          <Image
            source={require('../assets/png/voice.png')} // 올바른 상대 경로로 변경
            style={styles.voiceImage}
          />
        </TouchableOpacity>
        <Text style={styles.recognizedText}>{recognizedText}</Text>
      </View>
      <Image
        source={require('../assets/png/homealarm.png')} // 올바른 상대 경로로 변경
        style={styles.homeAlarmImage}
      />
      <View style={styles.homeAlarmContainer}>
        <View style={styles.alarm}>
          <View style={styles.newAlarm}></View>
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
                <Text style={styles.dailyTextFont}>해바라기를 선물로 받아 봤으면 했어요.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
