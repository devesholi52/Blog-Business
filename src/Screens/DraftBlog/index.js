import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color } from '../../Utils'
import DraftBlogCard from './DraftBlogCard'


const data = [1, 2, 2, 3, 3, 3, 3, 4]

export default function index() {
  return (
    <View style={styles.container}>
      <FlatList data={data}
        renderItem={({ item }) => <DraftBlogCard item={item} />}
      />

    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:Color.white
  }
})