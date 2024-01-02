import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Color, width, height, Font } from '../../Utils'
import ProductListingcard from './ProductListingcard'
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import ProductListingFilter from '../ProductListingFilter';

const data = [{
    photo: require('../../assets/img/prod-list-img-1.jpg'),
    title: "Cloth",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',
},

{
    photo: require('../../assets/img/prod-list-img-2.jpg'),
    title: "Sneaker",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',
},

{
    photo: require('../../assets/img/prod-list-img-3.jpg'),
    title: "Electronic",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',

},

{
    photo: require('../../assets/img/prod-list-img-4.jpg'),
    title: "Mobile",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',

},

{
    photo: require('../../assets/img/prod-list-img-1.jpg'),
    title: "Home Appliances",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',

},

{
    photo: require('../../assets/img/prod-list-img-2.jpg'),
    title: "Gym Products",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',

},

]

export default function index({ navigation }) {
    const [isModal, setisModal] = useState(false)
    return (
        <ScrollView style={styles.container}>
            {isModal && <ProductListingFilter
                modalVisible={isModal}
                setModalVisible={() => setisModal(!isModal)} />}
            <View style={styles.inputbox}>
                <TextInput
                    placeholder='Search by Name,Type'
                    placeholderTextColor={Color.gray}
                    style={styles.textinput} />
                <Icon name="search1" size={18} color={Color.black}
                />
            </View>
            <TouchableOpacity style={styles.icon}>
                <Entypo name="sound-mix" size={20} color={Color.black}
                    onPress={() => setisModal(!isModal)} />
            </TouchableOpacity>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ProductListingcard data={item} navigation={navigation} />}
                numColumns={2}
            />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white
    },
    inputbox: {
        width: width / 1.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.white,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        paddingHorizontal: 10,
        margin: 15,
        borderRadius: 25,
        elevation: 4,

    },
    textinput: {
        padding: 10,
        color: Color.black,
        borderRadius: 15,
        borderColor: '#eee',
        fontFamily: Font.Regular
    },
    icon: {
        margin: 5,
        alignSelf: 'flex-end',
        marginRight: 25
    }
})