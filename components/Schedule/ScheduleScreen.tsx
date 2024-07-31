import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './ScheduleScreen-styles';
import LinearGradient from 'react-native-linear-gradient';

// 현재 날짜와 시간 가져오기
const getCurrentDate = () => {
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaNow = new Date(utcNow + koreaTimeDiff);

  return {
    currentDate: koreaNow,
    currentDay: koreaNow.getDate(),
    currentMonth: koreaNow.getMonth() + 1,
    currentYear: koreaNow.getFullYear(),
    currentWeekDay: koreaNow.getDay(),
  };
};

const { currentDate, currentDay, currentMonth, currentYear, currentWeekDay } = getCurrentDate();

// 요일 배열 (일요일부터 토요일까지)
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

// 예시로 사용할 날짜 배열 (1일부터 31일까지)
const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

const ScheduleScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(daysInMonth.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderDays = () => {
    const startIdx = currentPage * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const daysToRender = daysInMonth.slice(startIdx, endIdx);

    return (
      <View style={styles.weekRow}>
        {daysToRender.map((day, index) => {
          const date = new Date(currentYear, currentMonth - 1, day);
          const weekDay = daysOfWeek[date.getDay()];
          return (
            <View key={index} style={styles.dayCell}>
              {day === currentDay ? (
                <LinearGradient
                  colors={['#FFAF36', '#FF8A00']}
                  style={styles.gradient}
                >
                  <Text style={styles.dayText}>{day}</Text>
                  <Text style={styles.weekDayText}>{weekDay}</Text>
                </LinearGradient>
              ) : (
                <View style={styles.gradient}>
                  <Text style={styles.dayText}>{day}</Text>
                  <Text style={styles.weekDayText}>{weekDay}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.ScheduleHeader}>
        <Text style={styles.mainText}>일정</Text>
        <Image
          source={require('../../assets/png/top-navi.png')}
          style={styles.Image}
        />
      </View>
      <View style={styles.calender}>
        <View style={styles.currentText}>
          <Text style={styles.yearText}>{currentYear}</Text>
          <Text style={styles.dayText}>{currentMonth}월</Text>
          <View style={styles.naviButton}>
            <View style={styles.navigationButtons}>
              <TouchableOpacity onPress={handlePreviousPage} style={styles.navButton}>
                <Text style={styles.navButtonText}>{"<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNextPage} style={styles.navButton}>
                <Text style={styles.navButtonText}>{">"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.dayCellContainer}>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
            {renderDays()}
          </ScrollView>
        </View>
      </View>
      <View style={styles.currentContainer}>
      </View>
    </View>
  );
};

export default ScheduleScreen;
