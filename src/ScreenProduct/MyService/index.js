import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color, width } from '../../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import MyServiceCard from './MyServiceCard';
import Styles from '../../Copmponents/CustomDropDown/Styles';

const data = [{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UtMYiOOCEojGNfcED9EiOEb9dFWlAydnaw&usqp=CAU',
    title: "Web Development and UI Design",
    desc : 'It is a long established fact that a render will be distracted by a readable.. ',
    date: 'Created On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMjNVm-bfen5Pn4Gb6N564fiqGsdD_WA57Q&usqp=CAU',
    title: "Web Application Development",
    desc : 'It is a long established fact that a render will be distracted by a readable..',
    date: 'Created On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Web Portal Development",
    desc : 'It is a long established fact that a render will be distracted by a readable..',
    date: 'Created On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qeGCdXDJc2bz031n2OR21I5ATGmHfrwNrA&usqp=CAU',
    title: "Web Application Development",
    desc : 'It is a long established fact that a render will be distracted by a readable..',
    date: 'Created On 16 Feb,2022',
},

]

export default function index({ navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <MyServiceCard data={item} navigation={navigation} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Color.white,
        borderColor:'#eee'
    }
})