import React, {useState} from 'react';
import {CalendarList} from 'react-native-calendars';
import { TextInput, TouchableOpacity, StyleSheet, View, Image, Text, Button, FlatList} from 'react-native';
import Colors from '../../constants/colors'

const timeToString = (time:any) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarListOfPatients = (props:any) => {
        const [items, setItems] = useState({});
        const [date, setDate] = useState(timeToString(new Date()));

  const renderGridItem = (itemData:any) =>{
    return (
    
          <TouchableOpacity>
              <View>
                <Text  style={styles.gridItemText}>
                   clicked
                </Text>
                
              </View>
            </TouchableOpacity>
    )
  }
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
              props.navigation.navigate('TodayCalendarListOfPatients', {DayId: day.dateString});
            }}
            markedDates={{
              '2020-09-16': {selected: true, marked: true},
              '2020-09-17': {marked: true},
              '2020-09-18': {disabled: true}
            }}
          />
      </View>
    )
}

CalendarListOfPatients.navigationOptions = {
    headerTitle: 'My Calendar',
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
    gridItem: {
        flex: 1,
        margin: 10,
        padding: 5,
        //height: 150,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemText: {
        fontSize: 18,
    }
})

export default CalendarListOfPatients;