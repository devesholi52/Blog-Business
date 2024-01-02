import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet,Image, ImageBackground } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Color, height, width } from '../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../Copmponents/GradientButton';

export default function Forgetpass({ navigation }) {
  return (
    <ImageBackground style={styles.container}
    source={require('../assets/img/1-splash-6_1.jpg')}>
      <Image source={require('../assets/img/logo.png')} resizeMode="contain" style={styles.imageTop} />
      <Text style={styles.text}>Forgot Password?</Text>

      <View style={styles.textInputStyle}>
        <TextInput style={styles.inputbox}
          placeholder='Enter Email'
          label='Enter Email'
          right={<TextInput.Icon name="email" color={Color.blue} />}
        />
        {/* <Icon name='user' size={20} color={Color.blue} /> */}
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Otp')}>
          <GradientButton style={styles.button}>       
             <Text style={{ fontFamily: 'Roboto-Medium', color: Color.white, fontSize: 15,fontFamily: 'Roboto-Regular', }}>Submit</Text>
             </GradientButton>
      </TouchableOpacity>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  title: {
    textAlign: 'center',
    paddingTop: height / 18,
    fontFamily: 'BERNIERShade-Regular',
    fontSize: 33,
    color: Color.blue,
    marginBottom: 40
  },
  text: {
    textAlign: 'center',
    padding: height / 25,
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: Color.black
  },
  button: {
    backgroundColor: Color.orange,
    padding: 12,
    paddingHorizontal: width/3,
    borderRadius: 14,
    alignSelf: 'center',
    marginTop: height / 12
  },
  inputbox: {
    fontSize: 14,
    width: width / 1.1,
    backgroundColor: Color.white,
    borderColor:'#eee',
    fontFamily: 'Roboto-Regular',
  },
  textInputStyle: {
    // width: width / 1.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    // borderBottomWidth: 1,
    // borderBottomColor: Color.gray
  },
  imageTop: {
    height: 130,
    width: 200,
    alignSelf: 'center',
    marginTop:60
  }

})