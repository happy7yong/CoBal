import React, { useState, useRef } from 'react';
import { View, Image, FlatList, Dimensions, Animated, Text, ScrollView, StyleSheet } from 'react-native';
import { styles } from './DailyScreen-styles'


const images = [
  require('../assets/png/dailyimage1.png'),
  require('../assets/png/dailyimage2.png'),
  require('../assets/png/dailyimage3.png'),
];

const { width, height } = Dimensions.get('window'); // 화면의 너비와 높이 가져오기

const DailyScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

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
            outputRange: [8, 16, 8],
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
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
      <View style={styles.dailyContainer}>
        <Text>Content Below FlatList</Text>
      </View>
      <View style={styles.dailyContainer}>
        <Text>More Content Below</Text>
      </View>
      <View style={styles.dailyContainer}>
        <Text>Additional Content Below</Text>
      </View>
    </ScrollView>
  );
};


export default DailyScreen;
