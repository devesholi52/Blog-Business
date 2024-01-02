import React from 'react'
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import GradientButton from '../Copmponents/GradientButton'
import { width, Color, Font } from '../Utils'

export default function Blogdetailscard() {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image source={require('../assets/img/bgImg.jpg')} style={styles.image} />
                <View style={styles.textcontainer}>
                    <Text style={{ fontSize: 14, fontFamily: 'Roboto-Medium', color: Color.black, lineHeight: 30, fontFamily: 'Roboto-Medium' }}>Robert Jhonson</Text>
                    <Text style={styles.date}>02/01/2022,14:30</Text>
                    <Text style={{ color: Color.gray, lineHeight: 20, fontFamily: 'Roboto-Regular', fontSize: 13 }}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</Text>
                </View>
            </View>
                    
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#eee',
        width: width / 1.05,
        margin: 10,
    },
    imageView: {
        flexDirection: 'row',
        padding: 8,
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 30,
        margin: 5
    },
    textcontainer: {
        width: width / 1.2,
        padding: 3
    },
    date: {
        color: Color.gray,
        lineHeight: 30,
        fontFamily: 'Roboto-Regular',
        fontSize: 13
    },
    button: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 3
    },
    buttontext: {
        color: Color.green
    },
    button2: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: Color.orange,
        width: width / 3,
        margin: 15,
        alignItems: 'center',
        marginLeft: 20
    },
    buttontext2: {
        fontFamily: Font.Regular,
        color: Color.white
    },

})
