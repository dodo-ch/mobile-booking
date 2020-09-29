import React from 'react';
import {TouchableOpacity, StyleSheet, View, Button, Text, FlatList} from 'react-native';
import Colors from '../../constants/colors'

const ChooseDoc = (props:any) => {
  const catID = props.navigation.getParam('ServiceId')
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
        props.navigation.navigate('Date', {catId: catID, docId: itemData.item.key, borderCol});
        }}>
        <View style={StyleSheet.flatten([borderStyle(borderCol), styles.item])}>
          <Text style={styles.textStyle}>
              {itemData.item.key}
          </Text>
          <Button color={Colors.primary} title={'+'} onPress={()=>{
              props.navigation.navigate('Date', {catId: catID, docId: itemData.item.key, borderCol});
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
            {key: 'Dr. med. Simon Reidl'},
            {key: 'Dr. med. Joseph Fischer'},
            {key: 'Dr. med. Jorg Thallamer'},
            {key: 'Dr. med. Patricia März'}
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

export default ChooseDoc;