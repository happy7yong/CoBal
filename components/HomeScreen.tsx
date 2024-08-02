import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { requestPermissions, startRecording, stopRecording } from './audioService'; // 수정된 경로 import
import { styles } from './HomeScreen-styles';

const audioRecorderPlayer = new AudioRecorderPlayer();

const HomeScreen: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingPath, setRecordingPath] = useState('');
  const [recordingDuration, setRecordingDuration] = useState('');
  const [playbackDuration, setPlaybackDuration] = useState('');

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermissions(); // 권한 요청
    }
  }, []);

  const handleVoiceButtonPress = async () => {
    if (isPlaying) {
      // If currently playing, stop playback
      await audioRecorderPlayer.stopPlayer();
      setIsPlaying(false);
    } else if (isRecording) {
      // If currently recording, stop recording
      const result = await stopRecording(setIsRecording);
      setRecordingPath(result);
    } else {
      // If neither recording nor playing, start recording
      await startRecording(setRecordingPath, setIsRecording, setRecordingDuration);
    }
  };

  const handlePlayButtonPress = async () => {
    if (isPlaying) {
      // If currently playing, stop playback
      await audioRecorderPlayer.stopPlayer();
      setIsPlaying(false);
    } else {
      // If not playing, start playback
      await audioRecorderPlayer.startPlayer(recordingPath);
      audioRecorderPlayer.addPlayBackListener((e) => {
        setPlaybackDuration(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition / 1000)));
        return;
      });
      setIsPlaying(true);
    }
  };

  return (
    <View style={styles.homeScreenContainer}>
      <Text>Recording Path: {recordingPath}</Text>
      <Text>Recording Duration: {recordingDuration}</Text>
      <Text>Playback Duration: {playbackDuration}</Text>
      <TouchableOpacity style={styles.voiceIcon} onPress={handleVoiceButtonPress}>
        <Image
          source={require('../assets/png/voice.png')} // 녹음 버튼 이미지
          style={styles.voiceImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePlayButtonPress}>
        <Image
          source={require('../assets/png/play.png')} // 재생 버튼 이미지
          style={styles.playImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
