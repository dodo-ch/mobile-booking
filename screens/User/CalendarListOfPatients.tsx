import React, {useState} from 'react';
import {CalendarList} from 'react-native-calendars';
import { TextInput, TouchableOpacity, StyleSheet, View, Image, Text, Button, FlatList} from 'react-native';
import Colors from '../../constants/colors'


const patients = [
    {
      id: "1",
      name: "Name 1",
      date: '2020-06-05 8:00'
    },
    {
      id: "2",
      name: "Name 2",
      date: '2020-06-05 9:00'
    },
    {
      id: "3",
      name: "Name 3",
      date: '2020-06-05 10:00'
    },
    {
      id: "4",
      name: "Name 4",
      date: '2020-06-05 11:00'
    },
    {
      id: "5",
      name: "Name 5",
      date: '2020-06-05 14:00'
    },
    {
      id: "6",
      name: "Name 6",
      date: '2020-06-05 15:00'
    }
  ]

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
        <View style={styles.gridDashboard}>
            <CalendarList
                current={date}
                pastScrollRange={6}
                futureScrollRange={6}
                scrollEnabled={true}
                showScrollIndicator={true}
                horizontal={true}
                onDayPress={renderGridItem}
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
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 10,
        padding: 5,
        height: 150,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemText: {
        fontSize: 18,
    }
})

export default CalendarListOfPatients;