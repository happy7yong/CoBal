import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './ScheduleScreen-styles';
import LinearGradient from 'react-native-linear-gradient';
import DayDetail from './DayDetail';
import { getKoreanTime } from '../getKoreanTime';

// 현재 날짜와 시간 가져오기
const { currentDate, currentDay, currentMonth, currentYear, currentWeekDay } = getKoreanTime();

// 요일 배열 (일요일부터 토요일까지)
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

// 예시로 사용할 날짜 배열 (1일부터 31일까지)
const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

const ScheduleScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [dayData, setDayData] = useState<string | null>(null);

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

  const handleDayPress = (day: number) => {
    setSelectedDay(day);
    setDayData(getDayData(day)); // 선택한 날짜의 데이터를 설정합니다.
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
          const isCurrentDay = day === currentDay;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleDayPress(day)}
              style={[
                styles.dayCell,
                isCurrentDay ? styles.currentDayCell : {},
              ]}
            >
              {isCurrentDay ? (
                <LinearGradient
                  colors={['#FFAF36', '#FF8A00']}
                  style={styles.gradient}
                >
                  <View style={styles.dayCellContent}>
                    <Text style={styles.dayText}>{day}</Text>
                    <Text style={styles.weekDayText}>{weekDay}</Text>
                  </View>
                </LinearGradient>
              ) : (
                <View style={styles.dayCellContent}>
                  <Text style={styles.dayText}>{day}</Text>
                  <Text style={styles.weekDayText}>{weekDay}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const getDayData = (day: number) => {
    // 클릭된 날짜에 대한 데이터를 반환하도록 합니다.
    // 여기서는 예시로 문자열을 반환합니다. 실제 데이터는 서버나 다른 소스에서 가져올 수 있습니다.
    return `데이터: ${day}일`;
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
        {selectedDay !== null ? (
          <DayDetail day={selectedDay} dayData={dayData} /> // 선택한 날짜의 데이터를 전달
        ) : (
          <Text style={styles.currentContainerText}>날짜를 선택해주세요</Text>
        )}
      </View>
    </View>
  );
};

export default ScheduleScreen;
