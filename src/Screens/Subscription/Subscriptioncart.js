import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Styles from '../../Copmponents/CustomDropDown/Styles';
import GradientButton from '../../Copmponents/GradientButton';
import { Color, width,Font } from '../../Utils';

export default function Subscriptioncart({
  data, navigation, active = false, onTouchCard = () => { } }) {  

  return (
    <Pressable onPress={onTouchCard}
      style={[style.container,
      { backgroundColor: active ? Color.blue : Color.white, }]}>
      <View style={style.boxfirst}>
        <Text style={[style.titlestyle, { color: active ? Color.white : Color.black }]}>{data.title}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={[style.descstyle, { color: active ? Color.white : Color.black, }]}>{data.desc} </Text> 
        <Text style={[style.timestyle, { color: active ? Color.white : Color.blue }]}>{data.time} </Text>
        </View>
      </View >
      <View style={style.box}>
        <Icon name='check' size={20} color={  active ? Color.orange : '#7cfc00'}  />
        <Text style={[style.subDesc1style , { color: active ? Color.white : Color.black }]}>{data.subDesc1}</Text>
      </View>

      <View style={style.box}>
        <Icon name='check' size={20} color={  active ? Color.orange : '#7cfc00'} />
        <Text style={[style.subDesc2style , { color: active ? Color.white : Color.black }]}>{data.subDesc2}</Text>
      </View>

      <View style={style.box}>
        <Icon name='check' size={20} color={  active ? Color.orange : '#7cfc00'} />
        <Text style={[style.subDesc3 , { color: active ? Color.white : Color.black }]}>{data.subDesc3}</Text>                   
      </View>

      <TouchableOpacity >
        {/* // onPress={() => navigation.navigate('Transaction')} */}
          <GradientButton style={style.button}>
        <Text style={style.buttontext}>Select</Text>
        </GradientButton>
      </TouchableOpacity>
    </Pressable>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    elevation: 5,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    // alignItems: 'center',
    alignSelf: 'center',
    width:width/1.6
  },
  boxfirst: {
    alignSelf: 'center',

  },
  titlestyle: {
    padding: 10,
    fontSize: 18,
    fontFamily:Font.Regular,
    color: Color.black
  },
  descstyle: {
    fontFamily:Font.Bold,
    fontSize: 22
  },
  timestyle: {
    color: Color.blue,
    fontSize:14,
    paddingTop:8,

  },

  box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subDesc1style: {
    margin: 10,
    fontFamily:Font.Regular,
    fontSize: 14,
    
  },
  subDesc2style: {
    margin: 10,
    fontFamily:Font.Regular,
    fontSize: 14,
    
  },
  button: {
    margin: 10,
    backgroundColor: Color.orange,
    borderRadius: 20,
    // paddingHorizontal:10,
    alignSelf: 'center',
    alignItems: 'center',
    minWidth: 110,
    maxWidth: 110
  },
  buttontext: {
    padding: 10,
    color: Color.white,
    fontSize: 14,
    fontFamily:Font.Medium

  },
  subDesc3:{
    margin: 10,
    fontWeight: '400',
    fontSize: 14,
    fontFamily:Font.Regular
  }
})