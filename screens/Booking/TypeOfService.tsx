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
  
  const renderGridItem = (itemData:any) =>{
      return (
      
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate('Doctor', {ServiceId: itemData.item.key});
                }}>
                <View style={styles.item}>
                  <Text  style={styles.textStyle}>
                      {itemData.item.key}
                  </Text>
                  <Button color={Colors.primary} title={'+'} onPress={()=>{
                      props.navigation.navigate('Doctor', {ServiceId: itemData.item.key});
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
            {key: 'Service1'},
            {key: 'Service2'},
            {key: 'Service3'}
          ]}
          renderItem={renderGridItem}
        />
         
        
        
          {/*<View style={styles.viewStyle}>
            <Text style={styles.textStyle}>test</Text>
            
                {categories.map(category => (
                  <TouchableOpacity
                    key={category.name}
                    onPress={() => {}}
                  >
                    <Text>
                        {category.count} products
                    </Text>
                    
                  </TouchableOpacity>
              ))}
                </View>*/}
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
      fontSize: 18,
      height: 35,
      margin: 10,
      flexDirection: 'row', justifyContent: "space-between" 
    },
    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60
    },
    textStyle: {
      fontSize: 20
    }
  });

export default TypeOfService;