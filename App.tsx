import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen'; // Import HomeScreen
import DailyScreen from './components/DailyScreen';
import ScheduleScreen from './components/Schedule/ScheduleScreen';

// Assuming you have these styles defined in your styles file
import { styles } from './components/styles';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            switch (route.name) {
              case '홈':
                iconSource = require('./assets/png/home.png');
                break;
              case '일상':
                iconSource = require('./assets/png/alert.png');
                break;
              case '일정':
                iconSource = require('./assets/png/daily.png');
                break;
              default:
                iconSource = require('./assets/png/default.png');
                break;
            }

            return (
              <Image
                source={iconSource}
                style={[
                  styles.tabBarIconStyle,
                  { tintColor: color, width: 30, resizeMode: 'contain' },
                ]}
              />
            );
          },
          tabBarStyle: {
            borderRadius: 42,
            borderColor: '#DEDEDE',
            borderWidth: 1,
            borderTopWidth: 1,
            height: 100,
            margin: 20,
            elevation: 0,
            paddingRight: 40,
            paddingLeft: 40,
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarItemStyle: {
            width: 20,
            padding: 24,
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="일상" component={DailyScreen} />
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="일정" component={ScheduleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
