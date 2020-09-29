import React from 'react';
import {StyleSheet, View, Button, Text, FlatList, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'

const categories = [
  {
    id: "plants",
    name: "Plants",
    tags: ["products", "inspirations"],
    count: 147,
    
  },
  {
    id: "seeds",
    name: "Seeds",
    tags: ["products", "shop"],
    count: 16,
    
  },
  {
    id: "flowers",
    name: "Flowers",
    tags: ["products", "inspirations"],
    count: 68,
   
  },
  {
    id: "sprayers",
    name: "Sprayers",
    tags: ["products", "shop"],
    count: 17,
   
  },
  {
    id: "pots",
    name: "Pots",
    tags: ["products", "shop"],
    count: 47,
    
  },
  {
    id: "fertilizers",
    name: "fertilizers",
    tags: ["products", "shop"],
    count: 47,
    
  }
]

const TypeOfService = (props:any) => {
  
  const borderStyle = function(myColor:any) {
    return {
      borderTopColor: myColor,
      borderTopWidth: 2
    }
  }

  const renderGridItem = (itemData:any) =>{
      return (
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('Doctor', {ServiceId: itemData.item.key, borderCol: itemData.item.color});
          }}>
          <View style={StyleSheet.flatten([borderStyle(itemData.item.color), styles.item])}>
              <Text style={styles.textStyle}>
                  {itemData.item.key}
              </Text>
              <Button color={Colors.primary} title={'+'} onPress={()=>{
                  props.navigation.navigate('Doctor', {ServiceId: itemData.item.key, borderCol: itemData.item.color});
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
          {id: 0, key: 'Covid-19 - Impfung', color: '#7EA8C1'},
          {id: 1, key: 'Influenza - Impfung', color: '#8374A5'},
          {id: 2, key: 'Vorsorgeuntersuchung', color: '#F3CEA6'},
          {id: 3, key: 'Blutprobe', color: '#B190A1'},
        ]}
        renderItem={renderGridItem}
      />
    </View>
  )
}


TypeOfService.navigationOptions = {
  headerTitle: 'Service',
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

export default TypeOfService;