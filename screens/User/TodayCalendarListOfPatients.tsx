import React from 'react';
import {Timeline} from 'react-native-calendars';
import {TouchableOpacity, StyleSheet, View, Button, Text, FlatList} from 'react-native';
import Colors from '../../constants/colors';
import moment from 'moment';

const patients = [
    {
      id: "1",
      name: "Müller",
      date: '2020-06-05 8:00:00'
    },
    {
      id: "2",
      name: "Schmidt",
      date: '2020-06-05 9:00:00'
    },
    {
      id: "3",
      name: "Schneider",
      date: '2020-06-05 10:00:00'
    },
    {
      id: "4",
      name: "Fischer",
      date: '2020-06-05 11:00:00'
    },
    {
      id: "5",
      name: "Meyer",
      date: '2020-06-05 14:00:00'
    },
    {
      id: "6",
      name: "Weber",
      date: '2020-06-05 15:00:00'
    },
    {
      id: "7",
      name: "Schulz",
      date: '2020-06-05 15:30:00'
    },
    {
      id: "8",
      name: "Wagner",
      date: '2020-06-05 16:30:00'
    },
    {
      id: "9",
      name: "Becker",
      date: '2020-06-05 10:00:00'
    },
    {
      id: "10",
      name: "Hoffmann",
      date: '2020-06-05 11:0:000'
    },
    {
      id: "11",
      name: "Schäfer",
      date: '2020-06-05 14:00:00'
    },
    {
      id: "12",
      name: "Koch",
      date: '2020-06-05 15:00:00'
    }
  ]

const TodayCalendarListOfPatients = (props:any) =>{
    const dayID = props.navigation.getParam('DayId')
    const catId = props.navigation.getParam('catId')
    const docId = props.navigation.getParam('docId')
    const borderCol = props.navigation.getParam('borderCol')
    const [currentDate, setCurrentDate] = React.useState('2020-06-05')

    const renderGridItem = (itemData:any) =>{
      const borderStyle = function(myColor:any) {
        return {
          borderTopColor: myColor,
          borderTopWidth: 2
        }
      }

      return (
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('SaveService', {TimeId: itemData.item.key, DayId: dayID, catId, docId, borderCol});
          }}>
            <View style={StyleSheet.flatten([borderStyle(borderCol), styles.item])}>
            
              <Text style={styles.textStyle}>
                  {itemData.item.key}
              </Text>
              <Button color={Colors.primary} title={'+'} onPress={()=>{
                  props.navigation.navigate('SaveService', {TimeId: itemData.item.key, DayId: dayID, catId, docId, borderCol});
              }}>
              </Button>
          </View>
        </TouchableOpacity>
      )
    }
  
    return (
        <View style={styles.container}>
            <Timeline 
                format24h={true}
                eventTapped={(e:any) => console.log(e)}
                events={patients.filter(event => moment(event.date).isSame(currentDate, 'day'))}
                scrollToFirst={true}
            />
            {/*<FlatList
              data={[
                {key: '8:00'},
                {key: '8:30'},
              ]}
              renderItem={renderGridItem}
            />*/}
        </View>
    )
}

TodayCalendarListOfPatients.navigationOptions = (navigationData:any) => {
    const dayID = navigationData.navigation.getParam('DayId')
    const timeID = navigationData.navigation.getParam('TimeId')

    return {
        headerTitle: dayID,
        headerStyle: {
        backgroundColor: Colors.secondary,
        },
        headerTintColor: 'white'
    }
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 5,
     margin: 10
    },
    item: {
      height: 80,
      margin: 10,
      padding: 15,
      flexDirection: 'row', 
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: Colors.lightBackground,
      backgroundColor: Colors.lightBackground,
      borderRadius: 6,
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 18
    }
});

export default TodayCalendarListOfPatients;