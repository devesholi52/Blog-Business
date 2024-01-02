import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color } from '../../Utils'
import Notificationcard from './Notificationcard'

const DATA = [1, 3, 2, 2, 5, 4, 6]

export default function Notification({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Notificationcard data={item} navigation={navigation} />} />
    </View>)
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1
  }
})