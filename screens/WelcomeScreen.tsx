import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button} from 'react-native';
import Colors from '../constants/colors'

function WelcomeScreen(props:any){
   
    return (
        <View 
            style={styles.background}
            //source={require('../assets/splash.png')}
        > 
            <View  style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/splash.png')}/>
                <Text style={{color: Colors.textDark, fontSize: 18}}>Welcome</Text>
            </View>
            
            <View  style={styles.loginButtonUser}>
                <Button color={Colors.primary} title="Login as User" /*style={styles.loginButton}*/ onPress={()=>{
                props.navigation.navigate('Service');
                }}>
                </Button>
            </View>
            <View  style={styles.loginButtonDoctor}> 
                <Button color={Colors.primary}  title="Login as Doctor" /*style={styles.loginButton}*/ onPress={()=>{
                props.navigation.navigate('Dashboard');
                }}>
                </Button>
            </View>
            <View  style={styles.copyrightLogo}>
                <Image style={styles.PDSlogo} source={require('../assets/pds_logo.jpg')}/>
                <Text style={styles.copyrightText}>Copyright © PredictiveDataScience s.r.o. 2020</Text>
            </View>
            
        </View>   
    
    )
}

WelcomeScreen.navigationOptions = {
    headerTitle: 'Sign In',
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: 'white',
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    loginButtonUser: {
        top: 70,
        width: '95%',
        height: 70,
    },
    loginButtonDoctor: {
        top: 50,
        width: '95%',
        height: 70,
    },
    logo: {
        width: 180,
        height: 180,
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center"
    },
    copyrightLogo: {
        position: "absolute",
        bottom: 25,
        alignItems: "center",
    },
    PDSlogo: {
        width: 200,
        height: 25,
    },
    copyrightText: {
        color: Colors.copyrightText,
        margin: 5,
        fontSize: 12,
    },

})

export default WelcomeScreen;