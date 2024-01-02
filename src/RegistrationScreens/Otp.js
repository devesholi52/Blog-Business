import React,{useState} from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import OtpInputs from 'react-native-otp-inputs';
import { Color, Font, height, width } from '../Utils';
import GradientButton from '../Copmponents/GradientButton';
import { CodeField, useBlurOnFulfill, useClearByFocusCell, Cursor } from "react-native-confirmation-code-field";

export default function Otp({ navigation }) {


  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT, });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });


  return (
    <ImageBackground style={styles.container}
      source={require('../assets/img/1-splash-6_1.jpg')}>
      <Image source={require('../assets/img/logo.png')} resizeMode="contain" style={styles.imageTop} />
      <View style={{ marginTop: 30 }}>
        <Text style={styles.text}>Enter OTP</Text>
        <Text style={{ color: Color.black, fontFamily: 'Roboto-Regular', fontSize: 13 }}>An 4 digits code has sent to + 18888888</Text>
      </View>
      <View style={styles.otpInputStyle}>
        {/* <OtpInputs
          handleChange={(code) => console.log(code)}
          numberOfInputs={4}
          inputStyles={styles.inputStyles}
          inputContainerStyles={styles.containerstyle}
          placeholder="0"
          placeholderTextColor={Color.blue}
        /> */}

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="numeric"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

      </View>
      <View style={styles.resendOTP}>
        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, fontFamily: 'Roboto-Regular', }}>Don't receive the OTP?</Text>
        <Text style={{ fontFamily: 'Roboto-Medium', color: Color.orange, fontSize: 13, marginLeft: 4 }}>RESEND OTP</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Passwordreset')}>
        <GradientButton style={styles.button}>
          <Text style={{ color: Color.white, fontFamily: 'Roboto-Medium', fontSize: 15, fontFamily: 'Roboto-Regular', }}>Send</Text>
        </GradientButton>
      </TouchableOpacity>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  otpInputStyle: {
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 60,
  },
  title: {
    textAlign: 'center',
    // paddingTop: 30,
    fontFamily: 'BERNIERShade-Regular',
    fontSize: 33,
    color: Color.blue

  },
  text: {
    textAlign: 'center',
    // padding: height / 16,
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    color: Color.black,

    marginTop: 20
  },
  inputStyles: {
    color: Color.black,
    fontSize: 15,
    textAlign: 'center'
  },
  containerstyle: {
    borderWidth: 1,
    borderColor: Color.blue,
    paddingHorizontal: 10,
    margin: 12,
    marginTop: height / 8
  },

  resendOTP: {
    flexDirection: 'row',
    marginBottom: height / 14,
    marginTop: 30
  },
  button: {
    backgroundColor: Color.orange,
    padding: 12,
    paddingHorizontal: width / 3,
    borderRadius: 14,
    alignSelf: 'center',
    marginBottom: height / 8
  },
  imageTop: {
    height: 130,
    width: 200,
    alignSelf: 'center',
    marginTop: 60
  },
  codeFieldRoot: {
    marginVertical: 10,
    width: width - 120,
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  cellRoot: {
    width: width / 7,
    height: width / 7,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: '#ffd700',
    // borderWidth: 1,
    backgroundColor: 'white'
  },
  cellText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Font.Bold
  },
  focusCell: {
    borderBottomColor:Color.orange,
    borderBottomWidth: 2,
  },



})