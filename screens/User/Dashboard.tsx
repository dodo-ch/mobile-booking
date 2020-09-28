import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text, Button, FlatList} from 'react-native';
import Colors from '../../constants/colors'

const Dashboard = (props:any) =>{

    const renderGridItem = (itemData:any) =>{
        return (
            <TouchableOpacity style={styles.gridItem} onPress={()=>{
                props.navigation.navigate(itemData.item.route);
                }}>
            <View >
                <Text style={styles.gridItemText}>
                    {itemData.item.key}
                </Text>
            </View>
              </TouchableOpacity>
            
        )
    }

    return (
        <View > 
            <View style={styles.gridTitle}>
                <Text style={styles.gridItemTitle}>Welcome</Text>
            </View>
        
            <FlatList 
                numColumns={2} 
                data={[
                    {key: 'My Patients', route: 'PatientList'},
                    {key: 'My Calendar', route: 'CalendarListOfPatients'},
                    {key: 'Time', route: 'Time'},
                    {key: 'Settings', route: 'SettingsDashboard'}
                ]}
                renderItem={renderGridItem}
            />
         
        </View>   
    
    )
}

Dashboard.navigationOptions = {
    headerTitle: 'Dashboard',
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: 'white'
};

const styles = StyleSheet.create({
    gridTitle: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 10,
        padding: 5,
        height: 150,
        backgroundColor: Colors.secondary,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemTitle: {
        fontSize: 18,
        color: Colors.primary,
    },
    gridItemText: {
        fontSize: 16,
        color: Colors.text,
    }

})

export default Dashboard;