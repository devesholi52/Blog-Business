import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../../Copmponents/GradientButton';
import { Color, width, height, Font } from '../../Utils';


export default function Servicelist1Card({ data, navigation }) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <ScrollView style={styles.container}>

            <Image style={styles.image} source={{ uri: data.photo }}
            />
            <Text style={styles.title}> {data.title}</Text>
            <Text style={styles.description}> {data.desc}</Text>
            <View style={{ paddingLeft: 10 }}>
                <Text style={styles.titledown}> {data.title1}</Text>
                <Text style={styles.descriptionDown}> {data.desc1}</Text>
                <Text style={styles.titledown}> {data.title2}</Text>
                <Text style={styles.descriptionDown}> {data.desc2}</Text>
                <Text style={styles.titledown}> {data.title3}</Text>
                <Text style={styles.descriptionDown}> {data.desc3}</Text>
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={[styles.ButtonMessage, styles.shodow]} onPress={() => navigation.navigate('Messanger')}>
                    <Text style={{ color: Color.black, fontSize: 16 }}>{data.Button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <GradientButton style={styles.ButtonConnect}>
                        <Text style={{ color: Color.white, fontSize: 16 }}>{data.Button2}</Text>
                    </GradientButton>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}
const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            borderWidth: 1,
            margin: 10,
            borderRadius: 13,
            borderColor: "#eee",

        },

        image: {
            height: 100,
            width: 100,
            borderRadius: 100,
            alignSelf: 'center',
            marginTop: 15
        },

        textimagecontainer: {
            // padding: 20,
            // borderRadius: 13,

        },
        title: {
            fontFamily: Font.Medium,
            fontSize:19,
            color: Color.black,
            // margin: 4,
            alignSelf: 'center',
            paddingTop: 8

        },
        description: {
            fontFamily: Font.Regular,
            fontSize: 17,
            color: Color.black,
            paddingBottom: 15,

            alignSelf: 'center'
        },
        titledown: {
            fontFamily: Font.Medium,
            fontSize: 17,
            color: Color.black,
            // padding: 4,
        },
        descriptionDown: {
            fontFamily: Font.Regular,
            fontSize: 14,
            color: Color.gray,
            paddingBottom: 20,

        },
        shodow: {
            shadowColor: Color.orange,
            shadowOffset: {
                width: 30,
                height: 30,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 2,
        },
        ButtonMessage: {
            borderRadius: 18,
            borderWidth: 1,
            padding: 8,
            margin: 10,
            paddingHorizontal: 30,
            borderColor: Color.orange,
            // alignContent: 'center',
            backgroundColor: Color.white,
            elevation: 3

        },
        ButtonConnect: {
            borderRadius: 18,
            // borderWidth: 1,
            padding: 8,
            margin: 10,
            backgroundColor: Color.orange,
            paddingHorizontal: 25,
            // borderColor:Color.grayShadow
        },
        button: {
            flexDirection: 'row',
            // alignSelf: 'center',
            marginLeft: 40,
            alignItems:'center'
        }
    })