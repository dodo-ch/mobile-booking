import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View, Image, Text, Button, FlatList} from 'react-native';
import Colors from '../../constants/colors'
import Slider from 'react-input-slider';

const SettingsDashboard = (props:any) => {
    const [timeValue, setTimeValue] = React.useState({ x: 10 });
    const [patientValue, setPatientValue] = React.useState({ x: 10 });
    //const [state, setState] = React.useState({ x: 10 });

    return (
        <View style={styles.gridDashboard}>
            
            <View style={styles.gridItem}>
                <Text>Time for 1 patient</Text>
                <Text>{timeValue.x} min</Text>
            
                <Slider
                    axis="x"
                    xmin={0}
                    xmax={500}
                    x={timeValue.x}
                    onChange={({ x }) => setTimeValue(state => ({ ...state, x }))}
                />
            </View>

            <View style={styles.gridItem}>
                <Text>Daily patients</Text>
                <Text>{patientValue.x}</Text>
                <Slider
                    axis="x"
                    xmin={0}
                    xmax={100}
                    x={patientValue.x}
                    onChange={({ x }) => setPatientValue(state => ({ ...state, x }))}
                />
            </View>
            {/*<Text>Time range for 1 patient</Text>
            <View style={styles.gridItem}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangePatientText(text)}
                    value={patientValue}
                    />
            </View>
            <Text>Number of patients</Text>
            <View style={styles.gridItem}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeTimeText(text)}
                    value={timeValue}
                    />
            </View>*/}
            <View style={styles.loginButtonDoctor}> 
                <Button title="Save" /*style={styles.loginButton}*/ onPress={()=>{
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
    },
    loginButtonDoctor: {
        top: 50,
        width: '100%',
        height: 70,
        //backgroundColor: '#27A603'
    },

})

export default SettingsDashboard;