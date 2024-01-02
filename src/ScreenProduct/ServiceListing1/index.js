import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color, Font, width } from '../../Utils'
import Servicelisting1Card from './Servicelisting1Card'
import Icon from 'react-native-vector-icons/AntDesign';

const data = [{
    photo: "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    title: "Jonathan Bronsnan",
    desc: 'Web Development & UI Agency',
    title1:"Experience",
    desc1:"5+ exeperience in Web Development",
    title2:"Location",
    desc2:"NewYork City",
    title3:"Description",
    desc3:" Lorem Ipsum is simply dummy text of the printing and ",
    Button1:"Message",
    Button2:"Send Request"
   
}, {
    photo: "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/antonio-juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    title: "Steave Walkman",
    desc: 'Web Development & UI Agency',
    title1:"Experience",
    desc1:"5+ exeperience in Web Development",
    title2:"Location",
    desc2:"NewYork City",
    title3:"Description",
    desc3:" Lorem Ipsum is simply dummy text of the printing and ",
    Button1:"Message",
    Button2:"Send Request"

},
{
    photo: "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/antonio-juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    title: "Clark wimelson",
    desc: 'Server and Cloud Service',
    title1:"Experience",
    desc1:"5+ exeperience in Web Development",
    title2:"Location",
    desc2:"NewYork City",
    title3:"Description",
    desc3:" Lorem Ipsum is simply dummy text of the printing and",
    Button1:"Message",
    Button2:"Send Request"
}
]

export default function index({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.inputbox}>
                <TextInput
                    placeholder='Search By Name'
                    style={styles.inputboxname} />
                <Icon name="search1" size={18} color={Color.gray} />
            </View>
            {/* <TextInput
                placeholder='Enter Pincode For Near By Service..'
                style={styles.inputboxPincode} /> */}
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Servicelisting1Card data={item} navigation={navigation} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        flex:1
    },
    inputbox: {
        width: width / 1.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.white,
        borderWidth: 1,
        paddingHorizontal: 10,
        margin: 15,
        borderRadius: 30,
        borderColor: '#eee',
        fontFamily:Font.Regular

    },
    inputboxPincode: {
        padding: 15,
        width: width / 1.1,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 30,
        borderColor: '#eee',
        marginBottom: 5,
        backgroundColor: Color.white,
        fontFamily:Font.Regular
    }
})