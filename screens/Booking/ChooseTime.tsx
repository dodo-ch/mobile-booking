import React from 'react';
import {StyleSheet, View, Button, Text, FlatList} from 'react-native';
import Colors from '../../constants/colors'
//import {Timeline} from 'react-native-calendars';


const ChooseTime = (props:any) =>{
    const dayID = props.navigation.getParam('DayId')
    const catId = props.navigation.getParam('catId')
    const docId = props.navigation.getParam('docId')
  
    const renderGridItem = (itemData:any) =>{
      return (<View style={styles.item}>
        
          <Text style={styles.textStyle}>
              {itemData.item.key}
          </Text>
          <Button title={'select'} onPress={()=>{
              props.navigation.navigate('SaveService', {TimeId: itemData.item.key, DayId: dayID, catId,docId});
          }}>
          </Button>
      </View>)
    }
  
    return (
        <View style={styles.container}>
            {/*<Timeline
              format24h={true}
              eventTapped={e => e}
              events={EVENTS.filter(event => moment(event.start).isSame('2017-09-06', 'day'))}
            />*/}
            <FlatList
              data={[
                {key: '8:00'},
                {key: '8:30'},
                {key: '9:00'},
                {key: '9:30'},
                {key: '10:00'},
                {key: '10:30'},
                {key: '11:00'},
                {key: '12:00'},
                {key: '12:30'},
                {key: '13:00'},
                {key: '13:30'},
                {key: '14:00'},
                {key: '14:30'},
                {key: '15:00'},
                {key: '15:30'},
                {key: '16:00'},
                {key: '16:30'},
                {key: '17:00'},
                {key: '17:30'},
                {key: '18:00'},
              ]}
              renderItem={renderGridItem}
            />
        </View>
    )
}

ChooseTime.navigationOptions = (navigationData:any) => {
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
      padding: 5,
      fontSize: 18,
      height: 45,
      flexDirection: 'row', justifyContent: "space-between" 
    },
    textStyle: {
      fontSize: 20
    }
});

export default ChooseTime;