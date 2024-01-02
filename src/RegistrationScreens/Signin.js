import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Color, height, width } from '../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { changeTokenValue } from '../redux/Actions/UserAction';
import GradientButton from '../Copmponents/GradientButton';
import { types } from '@babel/core';


export default function Signin({ navigation }) {
  const [isOpen, setIsOpen] = useState(true)

  const dispatch = useDispatch()
  const tokenfunc = useSelector(state => state?.user.tokenfunc)

  const Submit = () => {
    // navigation.navigate('BlogListing')
    dispatch(changeTokenValue(JSON.stringify(true)))
    AsyncStorage.setItem('token', JSON.stringify(true))
    tokenfunc(true)
  }

  return (
    <ImageBackground style={styles.container}
      source={require('../assets/img/1-splash-6_1.jpg')}>
      <View style={{ marginTop: 40 }}>
        <Image source={require('../assets/img/logo.png')} resizeMode="contain" style={styles.imageTop} />
        <Text style={styles.signin}>Sign In</Text>

        <View style={[styles.textinput, { marginTop: 34, }]}>
          <TextInput placeholder='Email/Mobile' placeholderTextColor={'gray'}
            style={styles.inputBox}
            label='Email/Mobile'
            right={<TextInput.Icon name="account" color={Color.blue} />}
          />
        </View>


        <View style={styles.textinput}>
          <TextInput placeholder='Enter Password' placeholderTextColor={'gray'}
            style={styles.inputBox}
            label='Enter Password'
            secureTextEntry={isOpen}
            right={<TextInput.Icon name="eye" color={Color.blue}
            />}
          />
        </View>




        <Text style={styles.forgetbutton}
          onPress={() => navigation.navigate('Forgetpass')}>Forget Password?</Text>
        <TouchableOpacity
          onPress={Submit}>
          <GradientButton style={styles.button}>
            <Text style={styles.buttontext}>Sign In</Text>
          </GradientButton>
        </TouchableOpacity>
      </View>

      <View style={styles.rowflex}>
        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 13, color: Color.mainBlack }}>Don't have an account?</Text>
        <Text style={{ fontFamily: 'Roboto-Medium', color: Color.blue, fontSize: 13, marginLeft: 2 }}
          onPress={() => navigation.navigate('Signup')}> Signup</Text>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'space-between'
  },
  tittle: {
    textAlign: 'center',
    paddingTop: height / 14,
    fontFamily: 'BERNIERShade-Regular',
    fontSize: 33,
    color: Color.blue
  },
  signin: {
    textAlign: 'center',
    // paddingTop: width /8,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    marginBottom: 20,
    color: Color.black,
    marginTop: 25
  },

  button: {
    backgroundColor: Color.orange,
    padding: 12,
    paddingHorizontal: width / 3,
    // elevation: 3,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: height / 16,
    borderRadius: 14
  },
  buttontext: {
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  textinput: {
    // width: width / 1.1,
    marginTop: 25,
    fontSize: 14,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width / 1.1,
    // borderWidth:2


  },
  forgetbutton: {
    marginTop: 4,
    fontFamily: 'Roboto-Medium',
    color: Color.blue,
    marginStart: 20,
    fontSize: 13
  },
  rowflex: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 25,
    marginBottom: 30
  },
  inputBox: {
    width: width / 1.1,
    fontSize: 14,
    backgroundColor: Color.white,
    // borderColor: '#eee',
    fontFamily: 'Roboto-Regular',

    // paddingLeft:15

  },
  imageTop: {
    height: 130,
    width: 200,
    alignSelf: 'center'
  }
})