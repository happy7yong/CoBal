import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { styles } from './DayDetail-styles';

interface DayDetailProps {
  day: number;
}

const DayDetail: React.FC<DayDetailProps> = ({ day }) => {
  const [appointments, setAppointments] = useState<string[]>([]);

  const handleAddAppointment = () => {
    // 새로운 일정 추가
    const newAppointment = `새로운 일정 ${appointments.length + 1}`;
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <View style={styles.totalContainer}>
      <View style={styles.inner}>
        <View style={styles.dayDetailContainer}>
          <Text style={styles.dayDetailTitle1}>할머니와 함께</Text>
          <Text style={styles.dayDetailTitle2}>보고있는 하루에요!</Text>
          <Text style={styles.dayDetailText}>날짜: {day}일</Text>
        </View>
        <TouchableOpacity style={styles.MakeAppoint} onPress={handleAddAppointment}>
          <Text style={styles.MAText}>약속잡기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.appointContainer}>
              {appointments.map((appointment, index) => (
                <View key={index} style={styles.appointSchedule}>
                  <Text>10:00 ~ 11:00</Text>
                  <Text style={styles.appointText}>{appointment}</Text>
                </View>
              ))}
            </ScrollView>
    </View>
  );
};

export default DayDetail;