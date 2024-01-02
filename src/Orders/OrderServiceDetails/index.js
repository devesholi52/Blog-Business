import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color, width } from '../../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import OrderServiceDetailsCard from './OrderServiceDetailsCard';
import Styles from '../../Copmponents/CustomDropDown/Styles';
import Toptab from '../../Copmponents/Toptab';

const tabData = ['New order', 'Shipped', 'Delivered']
const data = [{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgje9ysJyrOS9rx99BXE39l7D2Qp-9Um043A&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Order On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CcXhsgAEDX64CDFc-IAbr5pVkPlypg6wog&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Order On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxNWdpXavbhLode2e5uw0AKlMxw6gLADdlQ&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Order On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mM6Z5y3RSu048JxxzIddg3gDL1B0M9gHJA&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Order On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CcXhsgAEDX64CDFc-IAbr5pVkPlypg6wog&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Order On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxNWdpXavbhLode2e5uw0AKlMxw6gLADdlQ&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Order On 16 Feb,2022',

},
{
    photo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Order On 16 Feb,2022',

},
]
const data2 = [{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxNWdpXavbhLode2e5uw0AKlMxw6gLADdlQ&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CcXhsgAEDX64CDFc-IAbr5pVkPlypg6wog&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ60wl0ubKEB135GWJWCTzfsmTVYdspIA-Jw&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgje9ysJyrOS9rx99BXE39l7D2Qp-9Um043A&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ60wl0ubKEB135GWJWCTzfsmTVYdspIA-Jw&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Shipped On 16 Feb,2022',
},

]
const data3 = [{
    photo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxNWdpXavbhLode2e5uw0AKlMxw6gLADdlQ&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxNWdpXavbhLode2e5uw0AKlMxw6gLADdlQ&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CcXhsgAEDX64CDFc-IAbr5pVkPlypg6wog&usqp=CAU',
    title: "Nautica",
    desc: 'Size M',
    desc2: 'Qty 1',
    date: 'Delivered On 16 Feb,2022',
},

]

export default function index({navigation }) {
    const [activeTab, setActiveTab] = useState('1')
    return (
        <View style={styles.container}>
            <Toptab
                data={tabData}
                activeTab={activeTab}
                setActiveTab={val => setActiveTab(val)} />

            {activeTab == '1' && <>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <OrderServiceDetailsCard data={item} navigation={navigation} />}
                />
            </>}

            {activeTab == '2' && <>
                <FlatList
                    data={data2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <OrderServiceDetailsCard data={item} navigation={navigation} />}
                />
            </>}
            {activeTab == '3' && <>
                <FlatList
                    data={data2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <OrderServiceDetailsCard data={item} navigation={navigation}/>}
                />
            </>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white
    }
})