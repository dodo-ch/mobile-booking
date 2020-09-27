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

    

    return (
      <View>
          <View style={styles.container}>
            <Text style={styles.item}>Service: {catId}</Text>
            <Text style={styles.item}>Doctor: {docId}</Text>
            <Text style={styles.item}>Date: {dayID}</Text>
            <Text style={styles.item}>Time: {timeID}</Text>
            <View style={styles.itemQR}>
                <QRCode size={250} value={'Service: '+ catId + ', Doctor: ' + docId + ', Date: ' + dayID + ', Time: ' + timeID}/>
            </View>
            
        </View>
        <View style={styles.itemSaveBtn}>
              <Button title={'Save'} onPress={()=>{props.navigation.navigate('Welcome');}} />
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
    margin: 5,
    fontSize: 18,
  },
  itemQR: {
    margin: 10,
  },
  itemSaveBtn: {
    margin: 5,
  },

});

export default SaveService;