import React, { useState, useRef } from 'react';
import { View, Image, FlatList, Dimensions, Animated, Text, ScrollView, PanResponder, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './DailyScreen-styles';

const images = [
  require('../assets/png/dailyimage1.png'),
  require('../assets/png/dailyimage2.png'),
  require('../assets/png/dailyimage3.png'),
];

const { width } = Dimensions.get('window');

const DailyScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const clickTimer = useRef<NodeJS.Timeout | null>(null);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        // Start a timer when the user presses down
        clickTimer.current = setTimeout(() => {
          // Move to TargetScreen if the press is long enough
          navigation.navigate('Target');
        }, 200); // 200ms delay before considering it a click
      },
      onPanResponderMove: () => {
        // If user starts moving, cancel the click action
        if (clickTimer.current) {
          clearTimeout(clickTimer.current);
          clickTimer.current = null;
        }
      },
      onPanResponderRelease: () => {
        // If the press didn't move, it's considered a click
        if (clickTimer.current) {
          clearTimeout(clickTimer.current);
          clickTimer.current = null;
          navigation.navigate('Target');
        }
      },
      onPanResponderTerminate: () => {
        // Handle when the responder is interrupted
        if (clickTimer.current) {
          clearTimeout(clickTimer.current);
          clickTimer.current = null;
        }
      },
    })
  ).current;

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
    Animated.timing(animatedValue, {
      toValue: index,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const renderIndicators = () => {
    return (
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => {
          const indicatorWidth = animatedValue.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [7, 16, 7],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.indicator,
                {
                  width: indicatorWidth,
                  backgroundColor: index === currentIndex ? '#FFFFFF' : '#CCCCCC',
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View {...panResponder.panHandlers} style={styles.scrollViewContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            renderItem={({ item }) => (
              <View style={[styles.imageContainer, { width }]}>
                <Image source={item} style={styles.image} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          {renderIndicators()}
        </View>
        <View style={styles.dailyInner}>
          <View style={styles.innerBar}></View>
          <View style={styles.dailyContainer}>
            <Image source={require('../assets/png/Sunflower-image.png')} style={styles.dailyContentImage} />
            <View style={styles.rightContainer}>
              <Text style={styles.TimeText}>AM 10:00</Text>
              <Text style={styles.thinkText1}>해바라기를 선물로</Text>
              <Text style={styles.thinkText2}>받아봤으면 했어요.</Text>
              <View style={styles.line}></View>
              <View style={styles.distance}>
                <Image source={require('../assets/png/distance.png')} style={styles.distanceImage} />
                <Text style={styles.GPSText}>신곡동 53-52</Text>
              </View>
              <View style={styles.btnInner}>
                <View style={styles.soundContainer}>
                  <Image source={require('../assets/png/sound.png')} style={styles.SIcon} />
                </View>
                <View style={styles.recorderContainer}>
                  <Image source={require('../assets/png/recorder.png')} style={styles.RIcon} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.dailyContainer}>
            <Image source={require('../assets/png/Sunflower-image.png')} style={styles.dailyContentImage} />
            <View style={styles.rightContainer}>
              <Text style={styles.TimeText}>AM 10:00</Text>
              <Text style={styles.thinkText1}>해바라기를 선물로</Text>
              <Text style={styles.thinkText2}>받아봤으면 했어요.</Text>
              <View style={styles.line}></View>
              <View style={styles.distance}>
                <Image source={require('../assets/png/distance.png')} style={styles.distanceImage} />
                <Text style={styles.GPSText}>신곡동 53-52</Text>
              </View>
              <View style={styles.btnInner}>
                <View style={styles.soundContainer}>
                  <Image source={require('../assets/png/sound.png')} style={styles.SIcon} />
                </View>
                <View style={styles.recorderContainer}>
                  <Image source={require('../assets/png/recorder.png')} style={styles.RIcon} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.emptyContainer}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DailyScreen;
