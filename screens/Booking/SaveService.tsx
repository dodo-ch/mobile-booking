import React from 'react';
import { StyleSheet, View, Button, Text, FlatList, CameraRoll , ToastAndroid} from 'react-native';
import Colors from '../../constants/colors'
import QRCode from 'react-native-qrcode-svg';
import RNFS from "react-native-fs"


const SaveService = (props:any) =>{
    const dayID = props.navigation.getParam('DayId')
    const timeID = props.navigation.getParam('TimeId')
    const catId = props.navigation.getParam('catId')
    const docId = props.navigation.getParam('docId')
    const borderCol = props.navigation.getParam('borderCol')

    const borderStyle = function(myColor:any) {
      return {
        borderTopColor: myColor,
        borderTopWidth: 2
      }
    }
    console.log(borderCol)
    return (
      <View>
          <View style={styles.container}>
            <View  style={StyleSheet.flatten([borderStyle(borderCol), styles.item])}>
              <Text style={styles.itemText}>Service: {catId}</Text>
              <Text style={styles.itemText}>Doctor: {docId}</Text>
              <Text style={styles.itemText}>Date: {dayID}</Text>
              <Text style={styles.itemText}>Time: {timeID}</Text>
            </View>
            
            <View style={styles.itemQR}>
                <QRCode size={250} value={'Service: '+ catId + ', Doctor: ' + docId + ', Date: ' + dayID + ', Time: ' + timeID}/>
            </View>
            
        </View>
        <View style={styles.itemSaveBtn}>
              <Button color={Colors.primary} title={'Save'} onPress={()=>{props.navigation.navigate('Welcome');}} />
           </View>
      </View>
    )
}

SaveService.navigationOptions = (navigationData:any) => {
    const dayID = navigationData.navigation.getParam('DayId')
    const timeID = navigationData.navigation.getParam('TimeId')
  return {
    headerTitle: 'Save',
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: 'white'
  }
};

const styles = StyleSheet.create({
  container: {
   //flex: 1,
   paddingTop: 5,
   margin: 10,
   //justifyContent: 'center',
   alignItems: 'center',
  },
  item: {
      height: 150,
      margin: 10,
      padding: 25,
      flexDirection: 'column', 
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: Colors.lightBackground,
      backgroundColor: Colors.lightBackground,
      borderRadius: 6,
  },
  itemQR: {
    margin: 10,
  },
  itemSaveBtn: {
    margin: 25,
  },
  itemText: {
    fontSize: 18,
    color: Colors.textDark
  }

});

export default SaveService;