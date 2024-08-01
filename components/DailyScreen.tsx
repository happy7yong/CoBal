import React, { useState, useRef } from 'react';
import { View, Image, FlatList, Dimensions, Animated, Text, ScrollView } from 'react-native';
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
            <Text>Content Below FlatList</Text>
          </View>
        </View>
        <View style={styles.dailyContainer}>
          <Image source={require('../assets/png/Sunflower-image.png')} style={styles.dailyContentImage} />
          <View style={styles.rightContainer}>
            <Text>Content Below FlatList</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DailyScreen;
