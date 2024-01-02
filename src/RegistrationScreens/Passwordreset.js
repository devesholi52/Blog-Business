import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet,Image, ImageBackground } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Color, height, width } from '../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../Copmponents/GradientButton';

export default function Passwordreset({ navigation }) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <ImageBackground style={styles.container}
    source={require('../assets/img/1-splash-6_1.jpg')}>
      <Image source={require('../assets/img/logo.png')} resizeMode="contain" style={styles.imageTop} />
      <Text style={styles.resetpassword}>Reset Password</Text>

      <View style={styles.textinput}>
        <TextInput style={styles.inputBox1}
          placeholder='Enter New Password'
          secureTextEntry={true}
          placeholderTextColor={Color.gray}
          value={password}
          onChangeText={val => setPassword(val)}
          label='Enter New Password'
          right={<TextInput.Icon name="eye" color={Color.blue} />} />
        {/* <Icon name='eyeo' size={20} color={Color.blue} /> */}
      </View>

      <View style={styles.textinput}>
        <TextInput style={styles.inputBox2}
          placeholder='Confirm New Password'
          secureTextEntry={true}
          placeholderTextColor={Color.gray}
          value={confirmPassword}
          onChangeText={val => setConfirmPassword(val)}
          label='Confirm New Password'
          right={<TextInput.Icon name="eye" color={Color.blue} />} />
        {/* <Icon name='eyeo' size={20} color={Color.blue} /> */}
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Signin')}>
        <GradientButton style={styles.button}>
          <Text style={styles.buttontext}>Reset Password</Text>
        </GradientButton>
      </TouchableOpacity>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  title: {
    textAlign: 'center',
    paddingTop: height / 18,
    fontFamily: 'BERNIERShade-Regular',
    fontSize: 33,
    color: Color.blue
  },
  resetpassword: {
    textAlign: 'center',
    // paddingTop: height / 10,
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    color: Color.black,
    paddingBottom: height / 14,
    marginTop:20
  },
  textinput: {
    // width: width / 1.1,
    marginHorizontal: 18,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: Color.gray
  },
  inputBox1: {
    fontSize: 14,
    width: width / 1.1,
    backgroundColor: Color.white,
    borderColor: '#eee',
    fontFamily: 'Roboto-Regular',
  },
  inputBox2: {
    fontSize: 14,
    width: width / 1.1,
    backgroundColor: Color.white,
    borderColor: '#eee',
    fontFamily: 'Roboto-Regular',
    marginTop:20
  },
  button: {
    backgroundColor: Color.orange,
    padding: 12,
    paddingHorizontal: width/4.3,
    borderRadius: 14,
    alignSelf: 'center',
    marginTop: height / 12
  },
  buttontext: {
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  imageTop: {
    height: 130,
    width: 200,
    alignSelf: 'center',
    marginTop:60
  }
})