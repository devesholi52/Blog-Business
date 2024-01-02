import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color } from '../../Utils'
import ServiceCard from './ServiceCard'

const data = [{
  photo: require('../../assets/img/2.png'),
  title: "Photography",

}, {
  photo: require('../../assets/img/3.png'),
  title: "IT Services",

},
{
  photo: require('../../assets/img/4.png'),
  title: "Handymam",
},
{
  photo: require('../../assets/img/service-img-4.jpg'),
  title: "Painter",
},
{
  photo: require('../../assets/img/service-img-5.jpg'),
  title: "Electrician",
},
{
  photo: require('../../assets/img/service-img-6.jpg'),
  title: "Machenic",
},
{
  photo: require('../../assets/img/service-img-7.jpg'),
  title: "Builder",
},
{
  photo: require('../../assets/img/service-img-8.jpg'),
  title: "Plumber",
},
{
  photo: require('../../assets/img/service-img-9.jpg'),
  title: "Architech",
},
{
  photo: require('../../assets/img/service-img-10.jpg'),
  title: "Copywriter",
},
{
  photo: require('../../assets/img/service-img-11.jpg'),
  title: "Desginer",
},
{
  photo: require('../../assets/img/service-img-12.jpg'),
  title: "Digitel Marketing",
}

]

export default function index({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ServiceCard data={item} navigation={navigation} />}
        numColumns={3}
      />
    </View>
 )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:Color.white,
    flex:1
  }
})