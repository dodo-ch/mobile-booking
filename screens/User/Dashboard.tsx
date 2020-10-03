import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text, Button, FlatList} from 'react-native';
import Colors from '../../constants/colors';
import DashboardGridTile from '../../components/DashboardGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const Dashboard = (props:any) =>{

    const renderGridItem = (itemData:any) =>{
        return <DashboardGridTile title={itemData.item.key} onSelect={()=>{
            props.navigation.navigate(itemData.item.route);
        }}/>
    }

    return (
        <View > 
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
    headerTintColor: 'white',
    headerLeft: (
        <HeaderButtons>
            <Item title="Menu" iconName="ios-menu" onPress={()=>{}}/>
        </HeaderButtons>
    )
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
        color: '#26373F',
    },
    gridItemText: {
        fontSize: 16,
        color: Colors.text,
    }

})

export default Dashboard;