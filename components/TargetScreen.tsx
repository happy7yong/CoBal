// components/TargetScreen.tsx
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const images = [
  require('../assets/png/dailyimage1.png'),
  require('../assets/png/dailyimage2.png'),
  require('../assets/png/dailyimage3.png'),
];

const TargetScreen: React.FC = () => {
  const navigation = useNavigation();
  const widthAnim = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: 100,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation, widthAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: widthAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <Animated.FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressBarContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 5,
    backgroundColor: '#e0e0df',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'tomato',
  },
  image: {
    width,
    height,
  },
});

export default TargetScreen;
