import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native'
import { Color, height, width, Font } from '../../Utils'
import Icon from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

export default function MyordersCard({ data, navigation }) {

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('MyUploadProducts')}>
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.image} source={{ uri: data.photo }} />
                    <View style={styles.textcontainer}>
                        <Text style={styles.title}> {data.title}</Text>
                        <View style={styles.textdesc}>
                            <Text style={{ fontFamily: 'Roboto-Medium', paddingVertical: 5 }}>{data.desc}</Text>
                        </View>
                        <Text style={styles.date}> {data.date}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <Icon name="right" size={16} color={Color.black} style={{ paddingRight: 10 }} />
            </TouchableOpacity>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        width: width / 1.1,
        marginTop: 5,
        backgroundColor: Color.white,
        elevation: 3,
        borderRadius: 5,
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 3,
        marginTop: 14,
        marginLeft: 5
    },
    innerMain: {
        padding: 5,
        flexDirection: 'row',
        // backgroundColor:'red',
        paddingVertical: 10,
    },
    textcontainer: {
        padding: 10
    },
    textdesc: {
        marginLeft: 3
    },
    title: {
        fontFamily: Font.Medium,
        fontSize: 15,
        color: Color.black
    },
    description: {
        fontSize: 13,
        fontFamily: Font.Regular
    },
    date: {
        fontFamily: Font.Regular,
        fontSize: 13,
        color: Color.black
    },
})
