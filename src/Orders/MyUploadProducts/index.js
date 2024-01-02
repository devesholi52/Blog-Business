import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color, width } from '../../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import MyUploadProductsCard from './MyUploadProductsCard';
import Styles from '../../Copmponents/CustomDropDown/Styles';

const data = [{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIQ9rl-aWudn8bOpebEC1FLWAmucnRpo5iA&usqp=CAU',
    title: "Cotton Half Sleeves Wear",
    desc : 'Women Cotton Half Sleeves',
    date: 'Delivery On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgje9ysJyrOS9rx99BXE39l7D2Qp-9Um043A&usqp=CAU',
    title: "Cotton Half Sleeves Wear",
    desc : 'Women Cotton Half Sleeves',
    date: 'Delivery On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxNWdpXavbhLode2e5uw0AKlMxw6gLADdlQ&usqp=CAU',
    title: "Cotton Half Sleeves Wear",
    desc : 'Women Cotton Half Sleeves',
    date: 'Delivery On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgje9ysJyrOS9rx99BXE39l7D2Qp-9Um043A&usqp=CAU',
    title: "Cotton Half Sleeves Wear",
    desc : 'Women Cotton Half Sleeves',
    date: 'Delivery On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mM6Z5y3RSu048JxxzIddg3gDL1B0M9gHJA&usqp=CAU',
    title: "Cotton Half Sleeves Wear",
    desc : 'Women Cotton Half Sleeves',
    date: 'Delivery On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIQ9rl-aWudn8bOpebEC1FLWAmucnRpo5iA&usqp=CAU',
    title: "Cotton Half Sleeves Wear",
    desc : 'Women Cotton Half Sleeves',
    date: 'Delivery On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxNWdpXavbhLode2e5uw0AKlMxw6gLADdlQ&usqp=CAU',
    title: "Cotton Half Sleeves Wear",
    desc : 'Women Cotton Half Sleeves',
    date: 'Delivery On 16 Feb,2022',

},
]

export default function index({ navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <MyUploadProductsCard data={item} navigation={navigation}/>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white
    }
})