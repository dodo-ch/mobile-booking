import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text, Button, TouchableNativeFeedback, Platform} from 'react-native';
import Colors from '../constants/colors';

const DashboardGridTile = (props: any) => {

    let TouchableCmp: any = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return(
        <View style={styles.gridItem}>
            <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
                <View style={styles.container}>
                    <Text style={styles.gridItemText}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
        
        
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5
    },
    container: {
        flex:1,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
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
});

export default DashboardGridTile;