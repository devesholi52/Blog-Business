import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color } from '../../Utils'
import WishlistCard from './WishlistCard'

const data = [{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxNWdpXavbhLode2e5uw0AKlMxw6gLADdlQ&usqp=CAU',
    title: "Cloth",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',
}, {
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIQ9rl-aWudn8bOpebEC1FLWAmucnRpo5iA&usqp=CAU',
    title: "Sneaker",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mM6Z5y3RSu048JxxzIddg3gDL1B0M9gHJA&usqp=CAU',
    title: "Electronic",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgje9ysJyrOS9rx99BXE39l7D2Qp-9Um043A&usqp=CAU',
    title: "Mobile",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CcXhsgAEDX64CDFc-IAbr5pVkPlypg6wog&usqp=CAU',
    title: "Home Appliances",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ60wl0ubKEB135GWJWCTzfsmTVYdspIA-Jw&usqp=CAU',
    title: "Gym Products",
    desc: 'women cotton set top',
    price: '250',
    realprice: '350',
    offpercent: '25%',

},
]

export default function index() {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <WishlistCard data={item} />}
                numColumns={2}
            />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
      backgroundColor:Color.white
    }
  })