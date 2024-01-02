import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Styles from '../../Copmponents/CustomDropDown/Styles'
import { height, Color, width, Font } from '../../Utils'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

export default function InboxCard({ data, navigation }) {
    return (
        <TouchableOpacity style={styles.Maincontainer}
          onPress={() => navigation.navigate('Messanger')}
        >
            <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.photo }} />
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.desc}>{data.desc}</Text>
                </View>
            </View>
            <Text style={styles.toptimetext}>
                {data.date}
            </Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    Maincontainer: {
        // height: height / 10,
        // width: width / 1.1,
        margin: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        // elevation:1
    },
    image:{
        height:50,
        width:50,
        borderRadius:40
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    title: {
        fontSize: 15,
        paddingLeft: 10,
        color: Color.mainBlack,
        fontFamily: Font.Medium
    },
    desc: {
        color: Color.gray,
        paddingLeft: 10,
        fontFamily: Font.Regular,
        fontSize:13
    },
    toptimetext: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingTop: 5,
        fontFamily: Font.Regular,
        fontSize:13
    },
}

)
