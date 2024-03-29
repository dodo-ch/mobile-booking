import React from 'react';
import {TouchableOpacity, StyleSheet, View, Button, Text, FlatList} from 'react-native';
import Colors from '../../constants/colors'


const ChooseTime = (props:any) =>{
    const dayID = props.navigation.getParam('DayId')
    const catId = props.navigation.getParam('catId')
    const docId = props.navigation.getParam('docId')
    const borderCol = props.navigation.getParam('borderCol')
  
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
      fontSize: 18,
      color: Colors.textDark
    }
});

export default ChooseTime;