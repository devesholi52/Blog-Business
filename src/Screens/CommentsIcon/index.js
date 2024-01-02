import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import CommentsIconCard from './CommentsIconCard'
import { Color, height, width, Font } from '../../Utils'
import GradientButton from '../../Copmponents/GradientButton'
const data = [1, 2, 2, 4]

export default function index({ navigation }) {
  return (
    <View style={{ backgroundColor: Color.white, flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CommentsIconCard item={item} navigation={navigation} />}
      />
      <View style={{ marginBottom: 70 }}>
        <TextInput style={styles.inputbox}
          placeholder='Write your comments..'
          placeholderTextColor={Color.gray}
          multiline={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('DraftBlog')}>
          <GradientButton style={styles.button} >
            <Text style={styles.buttontext}>Submit</Text>
          </GradientButton>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputbox: {
    minHeight: 80,
    maxHeight: 300,
    backgroundColor: Color.white,
    // margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    // color: Color.black,
    borderWidth: 1,
    borderColor: '#eee',
    width: width / 1.15,
    alignSelf: 'center',
    marginBottom: 25,
    elevation: 1,
    fontFamily: Font.Regular,
    fontSize: 14

  },
  button: {
    padding: 10,
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 40,
    // backgroundColor: Color.green,
    marginLeft: 20,
    // elevation: 1
    // marginBottom:40

  },
  buttontext: {
    color: Color.white,
    fontFamily: Font.Regular,
    fontSize: 13
  }
})
