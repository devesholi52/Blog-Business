import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native'
import { Color, height, width,Font } from '../../Utils'
import Subscriptioncart from './Subscriptioncart'

const data = [{
  title: "Basic",
  desc: '$10/ ',
  time: 'month',
  subDesc1: 'Up to 1 users',
  subDesc2: 'Flexible team meetings',
  subDesc3: 'Single company record',
}, {
  title: "Standard",
  desc: '$10/ ',
  time: '3month',
  subDesc1: 'Up to 1 users',
  subDesc2: 'Flexible team meetings',
  subDesc3: 'Single company record',
}, {
  title: "Enterprise",
  desc: '$10/ ',
  time: '6month',
  subDesc1: 'Up to 1 users',
  subDesc2: 'Flexible team meetings',
  subDesc3: 'Single company record',
}]

export default function index({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(1)
  return (<View style={styles.container}>
    <View>
      <Text style={styles.title}>Choose Your Plan</Text>
      <Text style={styles.subtitle}>Choose the right pricing for your and get started</Text>
      <Text style={{ alignSelf: 'center', marginBottom: 25, fontSize: 15, fontFamily: 'Roboto-Regular' }}>with your project.</Text>
    </View>
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <Subscriptioncart
        data={item}
        navigation={navigation}
        active={activeIndex == index}
        // onTouchCard={() => { setActiveIndex(index) }}
      />}
    />

  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  title: {
    color: Color.black,
    alignSelf: 'center',
    fontFamily: Font.Medium,
    margin: 10,
    paddingTop: 25,
    fontSize: 20,
  },
  subtitle: {
    color: Color.gray,
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: Font.Regular
  }
})