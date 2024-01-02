import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, FlatList, Image } from 'react-native'
import { Color, width,Font } from '../../Utils'
import CustomDropDown from '../../Copmponents/CustomDropDown'
import { Icon } from 'react-native-elements'
import Transactioncart from './Transactioncart'
import { Picker } from '@react-native-picker/picker'
const DATA = [1, 4, 3, 6, 5, 7]

export default function index() {
  const [value, setValue] = useState('')

  const onSelectBusinessCategory = (item) => {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
  }
  return (
    <View style={styles.container}>

      <Image source={require('../../assets/img/transaction-bg.png')}
        style={styles.image} resizeMode='cover' />
      <View style={styles.imageText}>
        <Text style={styles.TotalEarning}>Total Earning</Text>
        <Text style={styles.text}>$1240</Text>
      </View>


      <View style={styles.containerlasttransation}>
        <Text style={styles.LastTransaction}>Last transactions</Text>
        <View style={{height:30,width:140,borderWidth:1,borderColor:'#eee',margin:10,borderRadius:10,padding:5}}>
          <Picker style={{ marginTop: -17,marginHorizontal:-18 }}
            // mode="dropdown"
            mode="dialog"
            iosIcon={<Icon name="arrow-down" color="#eee"/>}
            headerBackButtonText="Back!"
            // placeholder='22'
            selectedValue={value}
            onValueChange={(value) => setValue(value)}>
            <Picker.Item label="January 2022" value="feb" style={{color:Color.gray,fontSize:14}} />
            <Picker.Item label="march" value="march" style={{color:Color.gray}}/>
          </Picker>
        </View>
      </View>

      <FlatList data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Transactioncart item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Color.white
  },

  image: {
    padding: 20,
    margin: 20,
    height: width / 4,
    width: width / 1.12,
    alignItems: 'center',
    borderRadius: 20

  },
  imageText: {
    position: 'absolute',
    top: width / 9,
    alignSelf: 'center',
  },
  TotalEarning: {
    color: Color.white,
    textAlign: 'center',
    fontSize: 20,
    // fontWeight: 'bold'
    fontFamily:Font.Medium
  },
  text: {
    color: Color.white,
    textAlign: 'center',
    fontSize: 24,
    // fontWeight: '600'
    fontFamily:Font.Regular
  },

  containerlasttransation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'blue'
    // paddingEnd: 20
  },
  LastTransaction: {
    color: Color.black,
    marginLeft: 20,
    fontSize: 16,
    fontFamily:Font.Medium
  },
  date: {
    color: Color.gray
  },
  dropdown: {
    // borderWidth: 1,
    // borderRadius: 15,
    // margin: 10,
    // padding: 10,
    borderColor: Color.gray,
    // backgroundColor: 'red',
    width: width / 4,
    padding: 3
  },


})
