import React from 'react'
import { View, Text, Icon, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import GradientButton from '../Copmponents/GradientButton';
import { Color, Font, height, width } from '../Utils';
export default function Confirmation() {
  return (
    <View style={styles.container}>
      <AntDesign name='checkcircleo' size={40} color={Color.green} style={{ marginTop: height / 6 }} />
      <Text style={styles.text1}>Thank you for Purchase </Text>
      <Text style={styles.text2}>Your Order no is : <Text style={{ fontFamily:Font.Medium }}>000323445</Text> </Text>
      <Text style={styles.text3}>We'll email you an Order confirmation with Details </Text>
      <TouchableOpacity >
        <GradientButton style={styles.button}>
        <Text style={styles.buttonText}>
          Continue Shopping
        </Text>
        </GradientButton>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    alignItems: 'center',
    // marginTop: height / 8,
    backgroundColor: Color.white,
    flex: 1
  },
  text1: {
    fontFamily:Font.Medium,
    fontSize: 22,
    color: Color.black,
    marginTop: 20
  },
  text2: {
    fontFamily:Font.Regular,
    fontSize: 15,
    color: Color.black,
    marginVertical: 20
  },
  text3: {
    fontFamily:Font.Regular,
    fontSize: 16,
    color: Color.black,
    marginVertical: 20
  },
  button: {
    // borderWidth:1,
    backgroundColor: Color.orange,
    padding: 12,
    paddingHorizontal: width / 5,
    borderRadius: 12,
    marginTop: 40
  },
  buttonText: {
    fontFamily:Font.Medium,
    color: Color.white,
    fontSize: 16,

  },
})
