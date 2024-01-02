import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet,ScrollView,Image, ImageBackground } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Color, height, width } from '../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { NavigationContainer } from '@react-navigation/native';
import GradientButton from '../Copmponents/GradientButton';

export default function Signup({ navigation }) {
  return (
    <ScrollView>
    <ImageBackground style={styles.container}
    source={require('../assets/img/1-splash-6_1.jpg')}>
      <Image source={require('../assets/img/logo.png')} resizeMode="contain" style={styles.imageTop} />
      <Text style={styles.signup}>Sign Up</Text>
      <View style={styles.textbox}>
        <View style={styles.textinput}>
          {/* <Icon name='user' size={20} color={Color.blue} style={styles.icon}/> */}
          <TextInput style={styles.inputbox}
            placeholder='  Full Name'
            label='Full Name'
            left={<TextInput.Icon name="account" color={Color.blue} />} />
        </View>
        <View style={styles.textinput}>
          {/* <Entypo name='old-mobile' size={20} color={Color.blue}/> */}
          <TextInput style={styles.inputbox}
            placeholder='  Mobile No.'
            label='Mobile No.'
            left={<TextInput.Icon name="cellphone" color={Color.blue} />} />

        </View>
        <View style={styles.textinput}>
          {/* <Fontisto name='email' size={18} color={Color.blue}/> */}
          <TextInput style={styles.inputbox}
            placeholder='  Email Address'
            label='Email Address'
            left={<TextInput.Icon name="email" color={Color.blue} />} />
        </View>
        <View style={styles.textinput}>
          {/* <EvilIcons name='unlock' size={22} color={Color.blue}/> */}
          <TextInput style={styles.inputbox}
            placeholder='  Password'
            label='Password'
            left={<TextInput.Icon name="lock" color={Color.blue} />} />
        </View>
        <View style={styles.textinput}>
          {/* <EvilIcons name='lock' size={22} color={Color.blue}/> */}
          <TextInput style={styles.inputbox}
            placeholder='  Confirm Password'
            label='Confirm Password'
            left={<TextInput.Icon name="lock-check" color={Color.blue} />} />
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Signin')}>
          <GradientButton style={styles.button}>
            <Text style={styles.buttontext}>Sign Up</Text>
          </GradientButton>
        </TouchableOpacity>
      </View>
      <View style={styles.rowflex}>
        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13 }}>Already have an account ?</Text>
        <Text style={{ fontFamily: 'Roboto-Medium', color: Color.blue, fontSize: 13 }}
          onPress={() => navigation.navigate('Signin')}> Sign in </Text>
      </View>
    </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Color.white,
    // justifyContent: 'space-between',
    flexDirection: "column"
  },
  tittle: {
    textAlign: 'center',
    paddingTop: height / 16,
    fontFamily: 'BERNIERShade-Regular',
    fontSize: 33,
    color: Color.blue
  },
  signup: {
    textAlign: 'center',
    // paddingTop: height / 10,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Color.black,
    marginTop:60
  },
  textbox: {
    // paddingTop: height / 18,
    alignSelf: 'center',
    marginTop:20
  },

  textinput: {
    // borderBottomWidth: 1,
    width: width - 20,
    padding: 6,
    borderRadius: 10,
    fontSize: 14,
    // margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomColor: Color.grayShadow



  },
  button: {
    backgroundColor: Color.orange,
    padding: 12,
    paddingHorizontal: width/3,
    borderRadius: 14,
    alignSelf: 'center',
    marginTop: 70
  },

  buttontext: {
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  rowflex: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 75,
    marginTop: 30

  },
  inputbox: {
    // padding: 5,
    fontSize: 14,
    borderColor: '#eee',
    width: width / 1.1,
    backgroundColor: Color.white,
    paddingLeft: 8,
    fontFamily: 'Roboto-Regular',
  },
  imageTop: {
    height: 130,
    width: 200,
    alignSelf: 'center',
    marginTop:60
  }
})
