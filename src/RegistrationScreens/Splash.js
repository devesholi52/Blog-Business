import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native'
import GradientButton from '../Copmponents/GradientButton'
import { Color, height, width } from '../Utils'

export default function Splash({ navigation }) {
    return (
        <ImageBackground style={styles.container} 
        source={require('../assets/img/1-splash-6_1.jpg')}
        >
            <Image source={require('../assets/img/logo.png')}  resizeMode="contain"  style={styles.image1} />
            <Image source={require('../assets/img/Untitled-1.png')}  resizeMode="contain"  style={styles.image} />
            <TouchableOpacity  onPress={() => navigation.navigate('Signin')}
            style={styles.button}>
                {/* <GradientButton style={styles.button}> */}
                    <Text style={styles.buttonText}>Getting Started </Text>
                {/* </GradientButton> */}
            </TouchableOpacity>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.blue,
        justifyContent: 'space-between',
        paddingVertical: 50
    },
    image:{
        height:350,
        width:350,
        alignSelf:'center',
        // marginTop:40
    },
    title: {
        textAlign: 'center',
        color: Color.white,
        fontSize: 40,
        paddingTop: 25,
        fontFamily: 'BERNIERShade-Regular'

    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        fontSize: 15
    },
    button: {
        backgroundColor: Color.black,
        padding: 14,
        paddingHorizontal: 30,
        elevation: 10,
        zIndex: 999,
        borderRadius: 30,
        alignSelf: 'center',
        marginBottom:30
        // marginTop: height / 2.7
    },
    image1:{
        height:170,
        width:220,
        alignSelf:'center'
    }
})

