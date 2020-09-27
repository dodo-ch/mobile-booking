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
 
{/*<CalendarList
            pastScrollRange={4}
            futureScrollRange={4}
            scrollEnabled={true}
            showScrollIndicator={true}
            style={()=>{}}
            onDayPress={(day)=>{
                props.navigation.navigate('Time', {DayId: day.dateString});
            }}
          />

          <WeekCalendar 
          onDayPress={(day)=>{
               setDate(day.dateString)
              
            }} />

        <Agenda 
            items={items}
            loadItemsForMonth={loadItems}
            selected={date}
            renderItem={renderItem}
          />
        
        */}
          const [items, setItems] = useState({});
          const [date, setDate] = useState(timeToString(new Date()));
 
    return (
      <View>
        <CalendarList
          current={date}
          pastScrollRange={6}
          futureScrollRange={6}
          scrollEnabled={true}
          showScrollIndicator={true}
          horizontal={true}
          onDayPress={(day:any)=>{
              props.navigation.navigate('Time', {DayId: day.dateString,catId,docId});
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
    container: {
     flex: 1,
     paddingTop: 5,
     margin: 10
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});

export default ChooseDate;