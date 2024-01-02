import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color, width } from '../../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import NewServiceCard from './NewServiceCard';
import Styles from '../../Copmponents/CustomDropDown/Styles';
import Toptab from '../../Copmponents/Toptab';

const tabData = ['New Sevice', 'On Going Service', 'Service Completed']
const data = [{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UtMYiOOCEojGNfcED9EiOEb9dFWlAydnaw&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',
    date: 'Order On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMjNVm-bfen5Pn4Gb6N564fiqGsdD_WA57Q&usqp=CAU',
    title: "Albert jhonson",
    desc: 'Web Development & Design',
    date: 'Order On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',
    date: 'Order On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qeGCdXDJc2bz031n2OR21I5ATGmHfrwNrA&usqp=CAU',
    title: "Albert jhonson",
    desc: 'Web Development & Design',
    date: 'Order On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMjNVm-bfen5Pn4Gb6N564fiqGsdD_WA57Q&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',
    date: 'Order On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Albert jhonson",
    desc: 'Web Development & Design',

    date: 'Order On 16 Feb,2022',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qeGCdXDJc2bz031n2OR21I5ATGmHfrwNrA&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Order On 16 Feb,2022',

},
]
const data2 = [{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Albert jhonson",
    desc: 'Web Development & Design',

    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMjNVm-bfen5Pn4Gb6N564fiqGsdD_WA57Q&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qeGCdXDJc2bz031n2OR21I5ATGmHfrwNrA&usqp=CAU',
    title: "Albert jhonson",
    desc: 'Web Development & Design',

    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UtMYiOOCEojGNfcED9EiOEb9dFWlAydnaw&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Albert jhonson",
    desc: 'Web Development & Design',

    date: 'Shipped On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qeGCdXDJc2bz031n2OR21I5ATGmHfrwNrA&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Shipped On 16 Feb,2022',
},

]
const data3 = [{
    photo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Delivered On 16 Feb,2022',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMjNVm-bfen5Pn4Gb6N564fiqGsdD_WA57Q&usqp=CAU',
    title: "Shonaya Christina",
    desc: 'Web Development & Design',

    date: 'Delivered On 16 Feb,2022',
},

]

export default function index({ navigation }) {
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
                    renderItem={({ item }) => <NewServiceCard data={item} navigation={navigation} />}
                />
            </>}

            {activeTab == '2' && <>
                <FlatList
                    data={data2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <NewServiceCard data={item} isMenuVisible={true} isRightOption={false} />}
                />
            </>}
            {activeTab == '3' && <>
                <FlatList
                    data={data2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <NewServiceCard data={item} isMenuVisible={false}
                        isRightOption={true} />}
                />
            </>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        flex: 1
    }
})