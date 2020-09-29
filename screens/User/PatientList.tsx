import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View, Image, Text, Button, FlatList} from 'react-native';
import Colors from '../../constants/colors'

const patients = [
    {
      id: "1",
      name: "Müller",
      date: '2020-06-05 8:00'
    },
    {
      id: "2",
      name: "Schmidt",
      date: '2020-06-05 9:00'
    },
    {
      id: "3",
      name: "Schneider",
      date: '2020-06-05 10:00'
    },
    {
      id: "4",
      name: "Fischer",
      date: '2020-06-05 11:00'
    },
    {
      id: "5",
      name: "Meyer",
      date: '2020-06-05 14:00'
    },
    {
      id: "6",
      name: "Weber",
      date: '2020-06-05 15:00'
    },
    {
      id: "7",
      name: "Schulz",
      date: '2020-06-05 8:00'
    },
    {
      id: "8",
      name: "Wagner",
      date: '2020-06-05 9:00'
    },
    {
      id: "9",
      name: "Becker",
      date: '2020-06-05 10:00'
    },
    {
      id: "10",
      name: "Hoffmann",
      date: '2020-06-05 11:00'
    },
    {
      id: "11",
      name: "Schäfer",
      date: '2020-06-05 14:00'
    },
    {
      id: "12",
      name: "Koch",
      date: '2020-06-05 15:00'
    }
  ]

const PatientList = (props:any) => {

  const renderGridItem = (itemData:any) =>{
    return (
    
            <TouchableOpacity >
                <View style={styles.item}>
                  <View style={{flexDirection: 'column', }}>
                      <Text style={styles.textStyle}>
                        {itemData.item.name}
                    </Text>
                    <Text style={styles.textStyle}>
                        {itemData.item.date}
                    </Text>
                  </View>
                

                <View style={{flexDirection: 'row', height: 35 }}>
                  <View style={{marginHorizontal: 5}}>
                    <Button color={Colors.primary} title={'+'} onPress={()=>{
                        props.navigation.navigate('SaveService', {TimeId: itemData.item.key});
                    }}>
                    </Button>
                  </View>
                  <View style={{marginHorizontal: 5}}>
                    <Button color={Colors.danger} title={'x'} onPress={()=>{
                        props.navigation.navigate('SaveService', {TimeId: itemData.item.key});
                    }}>
                    </Button>
                  </View>
                </View>
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
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
      height: 120,
      width: 320,
      margin: 10,
      padding: 10,
      flexDirection: 'row', 
      justifyContent: "space-between",
      borderWidth: 1,
      borderTopWidth: 2,
      borderTopColor: '#8374A5',
      borderColor: Colors.lightBackground,
      backgroundColor: Colors.lightBackground,
      borderRadius: 6,
      //alignItems: 'center',
    },
    textStyle: {
      fontSize: 18
    }
})

export default PatientList;