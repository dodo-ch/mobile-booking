import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View, Image, Text, Button, FlatList} from 'react-native';
import Colors from '../../constants/colors'

const patients = [
    {
      id: "1",
      name: "Name 1",
      date: '2020-06-05 8:00'
    },
    {
      id: "2",
      name: "Name 2",
      date: '2020-06-05 9:00'
    },
    {
      id: "3",
      name: "Name 3",
      date: '2020-06-05 10:00'
    },
    {
      id: "4",
      name: "Name 4",
      date: '2020-06-05 11:00'
    },
    {
      id: "5",
      name: "Name 5",
      date: '2020-06-05 14:00'
    },
    {
      id: "6",
      name: "Name 6",
      date: '2020-06-05 15:00'
    }
  ]

const PatientList = (props:any) => {

  const renderGridItem = (itemData:any) =>{
    return (
    
          <TouchableOpacity>
              <View>
                <Text  style={styles.gridItemText}>
                    {itemData.item.name + ' ' +itemData.item.date}
                </Text>
                
              </View>
            </TouchableOpacity>

      
    )
  }

    return (
        <View style={styles.gridDashboard}>
            <FlatList
              data={patients}
              renderItem={renderGridItem}
            />
            
        </View>
    )
}

PatientList.navigationOptions = {
    headerTitle: 'My Patients',
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: 'white'
};

const styles = StyleSheet.create({
    gridDashboard: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 10,
        padding: 5,
        height: 150,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemText: {
        fontSize: 18,
    }
})

export default PatientList;