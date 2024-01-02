import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Color, width, Font } from '../../Utils'

export default function Transactioncart() {
    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <Image source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960' }}
                    style={styles.image} />
                <View style={styles.textcontainer2}>
                    <Text style={styles.title}>Jonathan Brosnan</Text>
                    <Text style={styles.disc}>Web Development Service</Text>
                </View>
                <View>
                    <Text style={styles.text}>$20</Text>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 15
    },
    image: {
        height: 35,
        width: 35,
        borderRadius: 30,
        margin: 10,
        marginRight:15
    },
    textcontainer2: {
        // flexDirection: 'column',
        // marginEnd:150
        width: width / 1.5
    },
    title: {
        color: Color.black,
        fontSize: 15,
        fontFamily: Font.Medium
    },
    disc: {
        color: Color.gray,
        fontSize: 13,
        paddingVertical: 5,
        // fontFamily: Font.Regular
        // fontFamily:'Roboto-MediumItalic'
    },
    text: {
        color: Color.black,
        fontSize: 13,
        paddingBottom: 25,
        fontFamily:Font.Medium

    },
})