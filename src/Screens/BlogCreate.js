import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import CustomDropDown from '../Copmponents/CustomDropDown'
import GradientButton from '../Copmponents/GradientButton'
import { Color, height, width, Font } from '../Utils'


export default function Blogcreate({ navigation }) {
  const [category, setcategory] = useState([
    { image: null, label: 'Public', value: 'one', id: 1 },
    { image: null, label: 'Private', value: 'two', id: 1 },
    // { image: null, label: 'one', value: 'one', id: 1 },
    // { image: null, label: 'one', value: 'one', id: 1 },
  ])

  const onSelectBusinessCategory = (item) => {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
  }
  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder='Enter blog title..'
        placeholderTextColor={Color.gray}
        style={styles.tittle}
      />
      <View style={styles.Uploadbannercontainer}>
        <TextInput
          placeholder='Upload Banner'
          placeholderTextColor={Color.gray}
          style={styles.tittleBanner}
          multiline={true}
        />
        <Icon type='entypo' name="attachment" size={16} color={Color.lightShadow} />
      </View>

      <TextInput
        placeholder='Write here...'
        placeholderTextColor={Color.gray}
        style={styles.desc}
      />
      {(!!category && category.length !== 0) &&
        <CustomDropDown
          styles={styles.dropdown}
          data={category} placeholder="Select"
          isSearch={false}
          onChangeValue={onSelectBusinessCategory} />}
      <TouchableOpacity
        onPress={() => navigation.navigate('BlogListing')} >
        <GradientButton style={styles.button}>
          <Text style={styles.buttonText}>Publish</Text>
        </GradientButton>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  Uploadbannercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.06,
    backgroundColor: Color.white,
    margin: 10,
    padding: 5,
    minHeight: 70,
    maxHeight: 50,
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 10,
    // elevation:1
  },
  tittle: {
    // height: height / 12,
    minHeight: 30,
    minWidth: 100,
    borderWidth: 1,
    margin: 10,
    borderRadius: 7,
    // borderColor: '#dcdcdc',
    borderColor: '#eee',
    fontSize: 15,
    // paddingBottom: 10,
    paddingLeft: 10,
    fontFamily: Font.Regular,
    // elevation:1
  },
  tittleBanner: {
    borderRadius: 7,
    borderColor: '#eee',
    paddingBottom: 20,
    width: width / 1.35,
    fontSize: 15,
    // paddingVertical:25
  },
  desc: {
    // height: height / 2,
    minWidth: 100,
    minHeight: 350,
    borderWidth: 1,
    margin: 10,
    borderRadius: 7,
    // borderColor: '#dcdcdc',
    borderColor: '#eee',
    fontSize: 15,
    paddingBottom: height / 2.8,
    paddingLeft: 10,
  },
  button: {
    // borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    paddingHorizontal: 40,
    alignSelf: 'center',
    margin: 20,
    fontFamily: Font.Regular,
    backgroundColor: Color.orange,

  },
  buttonText: {
    color: Color.white,
    fontSize: 15

  },
  dropdown: {
    width: width / 1.05,
    marginLeft: 10,
    borderColor: '#eee',
    fontFamily: Font.Regular,
    paddingVertical:15,
  }
})
