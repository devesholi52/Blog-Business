import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Color, width,Font } from '../../Utils';

export default function Subscriptioncart({ data, navigation }) {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => navigation.navigate('ProductListing')}>
      <Image
        style={styles.image}
        source={{ uri: data.photo }} />
      <Text style={styles.text}> {data.title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      alignItems: 'center',
      width: width / 3,
      // flex:1,
      backgroundColor: Color.white,
      padding:17
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 100,
      margin: 10
    },
    text: {
      // fontFamily: "Fredoka_Condensed-Bolds",
      // fontSize: 16,
      color: Color.black,
      fontFamily:Font.Medium,
      fontSize:14
    }
  })