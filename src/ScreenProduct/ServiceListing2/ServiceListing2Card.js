import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../../Copmponents/GradientButton';
import { Color, width, height,Font } from '../../Utils';


export default function ServiceList2Card({ data, navigation }) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <View style={styles.container}>
            {/* <View style={styles.textimagecontainer}> */}
            <Image style={styles.image} source={{ uri: data.photo }}
            />
            <View style={styles.textcontainer}>
                <Text style={styles.title}> {data.title}</Text>
                <Text style={styles.description}> {data.desc}</Text>
                <Text style={styles.description2}> {data.desc2}</Text>
                {/* </View> */}

                <View style={styles.button}>
                    <TouchableOpacity style={styles.ButtonMessage}>
                        <Text style={{ color: Color.black, fontSize: 16,fontFamily:Font.Medium }}>{data.Button1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('WishList')}>
                        <GradientButton style={styles.ButtonConnect}>
                            <Text style={{ color: Color.white, fontSize: 16,fontFamily:Font.Medium }}>{data.Button2}</Text>
                        </GradientButton>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const
    styles = StyleSheet.create({
        container: {
            // flex: 1,
            borderWidth: 1,
            margin: 10,
            borderRadius: 13,
            borderColor: '#eee',
            // backgroundColor:Color.green
        },

        image: {
            height: height / 3,
            width: width / 1.06,
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
        },

        textimagecontainer: {
            flexDirection: 'row',
            padding: 20,
            marginLeft: 20,
            borderRadius: 13,

        },
        textcontainer: {
            backgroundColor: '#f5fffa',
            borderColor: '#eee'
        },
        title: {
            fontFamily:Font.Medium,
            fontSize: 22,
            color: Color.blue,
            paddingTop: 10,
            paddingHorizontal: 10
            // margin: 4

        },
        description: {
            // fontWeight: 'bold',
            fontSize: 18,
            color: Color.black,
            paddingHorizontal: 10,
            fontFamily:Font.Medium
            // padding: 4
        },
        description2: {
            fontSize: 14,
            color: Color.gray,
            padding: 10,
            paddingVertical: 15,
            fontFamily:Font.Regular
        },
        ButtonMessage: {
            borderRadius: 10,
            borderWidth: 1,
            padding: 10,
            margin: 10,
            paddingHorizontal: 30,
            borderColor: '#eee'

        },
        ButtonConnect: {
            borderRadius: 10,
            // borderWidth: 2,
            padding: 10,
            margin: 10,
            backgroundColor: Color.orange,
            paddingHorizontal: 30,
            borderColor: Color.grayShadow
        },
        button: {
            flexDirection: 'row',
            alignSelf: 'center',

        }
    })