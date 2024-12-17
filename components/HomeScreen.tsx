import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, Platform } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { requestPermissions, startRecording, stopRecording } from './audioService';
import { styles } from './HomeScreen-styles';
import axios from 'axios';
import { getKoreanTime } from './getKoreanTime'; // Import the function

const audioRecorderPlayer = new AudioRecorderPlayer();

const HomeScreen: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingPath, setRecordingPath] = useState('');
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermissions();
    }

    // 현재시각 실시간 추적
    const timer = setInterval(() => {
      const { currentDate, currentDay, currentMonth, currentYear, currentWeekDay } = getKoreanTime();

      //현재 시각 포맷 "AM/PM hh:mm"
      const formattedTime = new Intl.DateTimeFormat('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(currentDate);
      setCurrentTime(formattedTime);

      //현재 날짜 포맷 "MM/DD"
      const formattedDate = `${currentMonth}/${currentDay}`;
      setCurrentDate(formattedDate);
    }, 1000);

    return () => {
      clearInterval(timer);
      audioRecorderPlayer.removePlayBackListener();
    };
  }, []);

  const uploadRecording = async (filePath: string) => {
    const formData = new FormData();
    formData.append('file', {
      uri: filePath,
      type: 'audio/m4a',
      name: 'recording.m4a',
    });

    try {
      const response = await axios.post('http://192.168.232.148:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    timeout: 10000, // 요청이 너무 오래 걸리면 오류 발생
     })
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('파일 업로드 오류:', error);
    }
  };

  const handleAlarm = async () => {
    console.log('알림을 누르셨습니다.');

    try {
      const response = await axios.post('http://192.168.232.148:5000/Alarm', {
        Alarm: true,
      });
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('서버 요청 오류:', error);
    }
  };

  const handleVoiceButtonPress = async () => {
    if (isPlaying) {
      await audioRecorderPlayer.stopPlayer();
      setIsPlaying(false);
      setIsImageVisible(false);
    } else if (isRecording) {
      const result = await stopRecording(setIsRecording);
      setRecordingPath(result);
      setIsImageVisible(false);
      await uploadRecording(result);
    } else {
      await startRecording(setRecordingPath, setIsRecording, () => {});
      setIsImageVisible(true);
    }
  };

  const handlePlayButtonPress = async () => {
    if (isPlaying) {
      await audioRecorderPlayer.stopPlayer();
      setIsPlaying(false);
      setIsImageVisible(false);
    } else {
      await audioRecorderPlayer.startPlayer(recordingPath);
      audioRecorderPlayer.addPlayBackListener((e) => {
        return;
      });
      setIsPlaying(true);
      setIsImageVisible(true);
    }
  };

  const openAi = async () => {
    try {
      const response = await axios.get('http://192.168.232.148:5000/run-openai');
      if (response.data.error) {
        console.error('Error from Python script:', response.data.error);
        return;
      }
      console.log('Python script output:', response.data.output);
    } catch (error) {
      console.error('Failed to call Flask server:', error);
    }
  };

  return (
    <View style={styles.homeScreenContainer}>
      <Image
        source={require('../assets/png/coBal.png')}
        style={styles.coBalImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>윤애남님은</Text>
        <Text style={styles.subText}>기분이 좋아요</Text>
        <View style={styles.voiceContainer}>
          <TouchableOpacity style={styles.voiceIcon} onPress={handleVoiceButtonPress}>
            <Image
              source={require('../assets/png/voice.png')}
              style={styles.voiceImage}
            />
          </TouchableOpacity>
          {isImageVisible && (
            <TouchableOpacity style={styles.voiceOnIcon} onPress={handlePlayButtonPress}>
              <Image
                source={require('../assets/png/voiceOn.png')}
                style={styles.voiceOnImage}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.openai} onPress={openAi}>
      <Image
        source={require('../assets/png/dogBark.png')}
        style={styles.openaiImage}/>
      </TouchableOpacity>
      <Image
        source={require('../assets/png/homealarm.png')}
        style={styles.homeAlarmImage}
      />
      <View style={styles.homeAlarmContainer}>
        <View style={styles.alarm}>
          <View style={styles.newAlarm}></View>
          <TouchableOpacity style={styles.topNavi1} onPress={handleAlarm}>
            <Image
              source={require('../assets/png/top-navi.png')}
              style={styles.topNavi}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.alarmTextContainer}>
          <Text style={styles.alarmMainText}>점심드시고</Text>
          <Text style={styles.alarmSubText}>혈압약 안드셨어요!</Text>
        </View>
      </View>


      <View style={styles.dailyContainer}>
        <View style={styles.dailyTextContainer}>
          <Text style={styles.dailyTextTime}>{currentTime}</Text>
          <Text style={styles.dailyTextDate}>{currentDate}</Text>
        </View>
        <View style={styles.inner}>
          <View style={styles.dailyInner}>
            <View style={styles.imageInner}>
              <Image
                source={require('../assets/png/Sunflower-image.png')}
                style={styles.SunFlowerImage}
              />
              <View style={styles.dailyTextInner}>
                <Text style={styles.dailyText}>해바라기를 선물로 받아 봤으면 했어요.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
