import React from 'react'
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { width, Color, Font } from '../../Utils'

export default function CommentsIconCard({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image source={require('../../assets/img/bgImg.jpg')} style={styles.image} />
                <View style={styles.textcontainer}>
                    <Text style={{ fontSize: 15, color: Color.black, lineHeight: 30, fontFamily: Font.Medium }}>Robert Jhonson</Text>
                    <Text style={styles.date}>02/01/2022,14:30</Text>
                    <Text style={{ color: Color.gray, lineHeight: 20, fontFamily: Font.Regular,fontSize:13,marginBottom:5 }}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</Text>
                </View>
            </View>
            {/* <TouchableOpacity style={styles.button}
                >
                <Text style={styles.buttontext}>Reply</Text>
            </TouchableOpacity> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        // alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#eee',
        width: width / 1.05,
        margin: 10,
        flex:1
        
    },
    imageView: {
        flexDirection: 'row',
        padding: 4,
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
        fontFamily:Font.Regular,
        fontSize:13
    },
    button: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 3
    },
    buttontext: {
        color: Color.green,
        fontFamily: Font.Medium
        
    }

})
