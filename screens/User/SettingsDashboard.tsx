import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View, Image, Text, Button, FlatList} from 'react-native';
import Colors from '../../constants/colors'
import Slider from '@react-native-community/slider';


const SettingsDashboard = (props: any) => {
    const [timeValue, setTimeValue] = React.useState( 10);
    const [patientValue, setPatientValue] = React.useState(10);

    return (
        <View style={styles.gridDashboard}>
            
            <View style={styles.gridItem}>
                <Text>Time for 1 patient</Text>
                <Text>{timeValue} min</Text>
                <Slider
                    style={{width: 300, height: 40}}
                    minimumValue={0}
                    maximumValue={500}
                    step={1}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#818DA6"
                    thumbTintColor="#818DA6"
                    value={timeValue}
                    onValueChange={(x)=>{setTimeValue(x)}}
                />
                
            </View>

            <View style={styles.gridItem}>
                <Text>Daily patients</Text>
                <Text>{patientValue}</Text>
                <Slider
                    style={{width: 300, height: 40}}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#818DA6"
                    thumbTintColor="#818DA6"
                    value={patientValue}
                    onValueChange={(x)=>{setPatientValue(x)}}
                />
            </View>
            <View style={styles.loginButtonDoctor}> 
                <Button color={Colors.primary} title="Save" /*style={styles.loginButton}*/ onPress={()=>{
                props.navigation.navigate('Dashboard');
                }}>
                </Button>
            </View>
        </View>
    )
}

SettingsDashboard.navigationOptions = {
    headerTitle: 'Settings',
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: 'white'
};

const styles = StyleSheet.create({
    gridDashboard: {
        paddingTop: 25,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        margin: 10,
        padding: 5,
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemText: {
        fontSize: 18,
    },
    loginButtonDoctor: {
        top: 50,
        width: '100%',
        height: 70,
        //backgroundColor: '#27A603'
    },

})

export default SettingsDashboard;