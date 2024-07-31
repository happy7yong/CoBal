// useSlideAnimation.ts
import { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler, runOnJS } from 'react-native-reanimated';
import { GestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const useSlideAnimation = (setCurrentDate: React.Dispatch<React.SetStateAction<string>>) => {
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<GestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      if (translateX.value > SCREEN_WIDTH / 3) {
        translateX.value = withSpring(SCREEN_WIDTH, {}, () => {
          translateX.value = 0;
          runOnJS(setCurrentDate)('07/30');
        });
      } else if (translateX.value < -SCREEN_WIDTH / 3) {
        translateX.value = withSpring(-SCREEN_WIDTH, {}, () => {
          translateX.value = 0;
          runOnJS(setCurrentDate)('07/30');
        });
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return { translateX, animatedStyle, gestureHandler };
};
