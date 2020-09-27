import React from 'react';
import { StyleSheet, View, Button, Text, FlatList} from 'react-native';
import Colors from '../../constants/colors'

const ChooseDoc = (props:any) => {
  const catID = props.navigation.getParam('ServiceId')

  const renderGridItem = (itemData:any) =>{
    return (
    <View style={styles.item}>
        <Text style={styles.textStyle}>
            {itemData.item.key}
        </Text>
        <Button title={'+'} onPress={()=>{
            props.navigation.navigate('Date', {catId: catID, docId: itemData.item.key});
        }}>
        </Button>
    </View>
    )
  }


  return (
    <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={renderGridItem}
        />
    </View>
        
  )
}

ChooseDoc.navigationOptions = (navigationData:any) => {
  const servID = navigationData.navigation.getParam('ServiceId');
  
  return {
    headerTitle: servID,
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

export default ChooseDoc;