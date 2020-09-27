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
                <Text>Welcome</Text>
            </View>
            
            <View  style={styles.loginButtonUser}>
                <Button title="Login as User" /*style={styles.loginButton}*/ onPress={()=>{
                props.navigation.navigate('Service');
                }}>
                </Button>
            </View>
            <View  style={styles.loginButtonDoctor}> 
                <Button title="Login as Doctor" /*style={styles.loginButton}*/ onPress={()=>{
                props.navigation.navigate('Dashboard');
                }}>
                </Button>
            </View>
            
        </View>   
    
    )
}

WelcomeScreen.navigationOptions = {
    headerTitle: 'Sign In',
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: 'white'
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
        width: '100%',
        height: 70,
        //backgroundColor: '#fc5c65'
    },
    loginButtonDoctor: {
        top: 50,
        width: '100%',
        height: 70,
        //backgroundColor: '#fc5c65'
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

})

export default WelcomeScreen;