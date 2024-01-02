import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color } from '../../Utils'
import InboxCard from './InboxCard'

const data = [{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UtMYiOOCEojGNfcED9EiOEb9dFWlAydnaw&usqp=CAU',
    title: "Phillip Jhon",
    desc: "hey would you like to go out",
    date: '10:10 AM',
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMjNVm-bfen5Pn4Gb6N564fiqGsdD_WA57Q&usqp=CAU',
    title: "Shopie Watson",
    desc: "hey would you like to go out",
    date: '10:10 AM',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Dare Malkowa",
    desc: "hey would you like to go out",
    date: '10:10AM',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Angela Wrong",
    desc: "hey would you like to go out",
    date: '10:10AM',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMqSt5lh6Z5ZDAYs3Pmxx5gWV4M5KzcqUbA&usqp=CAU',
    title: "Michel Hussain ",
    desc: "hey would you like to go out",
    date: '10:10 AM',

},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qeGCdXDJc2bz031n2OR21I5ATGmHfrwNrA&usqp=CAU',
    title: "Waka Vendr",
    desc: "hey would you like to go out",
    date: '10:10 AM',
},]

export default function index({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <InboxCard data={item} navigation={navigation} />} />
    </View>)
}
const styles = StyleSheet.create({
  container: {
      flex:1,
    backgroundColor: Color.white
  }
})