import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Color, width,Font } from '../../Utils';

export default function ServiceCategory({ data, navigation }) {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => navigation.navigate('ServiceListing1')}>
      <Image
        style={styles.image}
        source={data.photo} />
      <Text style={styles.text}> {data.title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      alignItems: 'center',
      width: width / 3,
      padding: 10
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 100,
      margin: 10
    },
    text: {
      fontFamily:Font.Medium,
      fontSize: 14,
      color: Color.black
    }
  })