import React, { useState } from 'react';
import {StyleSheet, View, Button, Text, FlatList, TouchableOpacity} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import Colors from '../../constants/colors'


const timeToString = (time:any) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const ChooseDate = (props:any) =>{
  const catId = props.navigation.getParam('catId')
  const docId = props.navigation.getParam('docId')
  const borderCol = props.navigation.getParam('borderCol')
  const [items, setItems] = useState({});
  const [date, setDate] = useState(timeToString(new Date()));
 
  return (
    <View>
      <CalendarList
        current={date}
        pastScrollRange={25}
        futureScrollRange={25}
        scrollEnabled={true}
        showScrollIndicator={true}
        horizontal={true}
        onDayPress={(day:any)=>{
            props.navigation.navigate('Time', {DayId: day.dateString,catId,docId, borderCol});
        }}
      />
    </View>
      
  )
}


ChooseDate.navigationOptions = {
    headerTitle: 'Date',
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: 'white'
  };

  

const styles = StyleSheet.create({
    gridDashboard: {
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
  },
    item: {
      padding: 10,
      height: 44,
    },
});

export default ChooseDate;