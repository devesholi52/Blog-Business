import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CustomDropDown from '../Copmponents/CustomDropDown'
import GradientButton from '../Copmponents/GradientButton'
import { Color, height, width, Font } from '../Utils'

export default function UploadProduct({ navigation }) {
    const [category, setcategory] = useState([
        { image: null, label: 'one', value: 'one', id: 1 },
        { image: null, label: 'two', value: 'two', id: 1 },
        { image: null, label: 'one', value: 'one', id: 1 },
        { image: null, label: 'one', value: 'one', id: 1 },
    ])

    const onSelectBusinessCategory = (item) => {
        console.log('====================================');
        console.log(item);
        console.log('====================================');
    }
    return (
        <ScrollView style={styles.container} >
            {(!!category && category.length !== 0) && <CustomDropDown styles={styles.dropdown} data={category} placeholder="Select Category" onChangeValue={onSelectBusinessCategory} />}
            <TextInput placeholder='Enter Product/Service name'
                placeholderTextColor={'gray'}
                style={styles.textinputsmall} />

            <TextInput placeholder='Price'
                placeholderTextColor={'gray'}
                style={styles.textinputsmall} />
            {(!!category && category.length !== 0) && <CustomDropDown styles={styles.dropdown} data={category} placeholder="Discount%" onChangeValue={onSelectBusinessCategory} />}
            <TextInput placeholder='Upload Image'
                placeholderTextColor={'gray'}
                style={styles.textinputsmall} />
            {(!!category && category.length !== 0) && <CustomDropDown styles={styles.dropdown} data={category} placeholder="Select Color" onChangeValue={onSelectBusinessCategory} />}
            {(!!category && category.length !== 0) && <CustomDropDown styles={styles.dropdown} data={category} placeholder="Select Size" onChangeValue={onSelectBusinessCategory} />}
            <TextInput placeholder='Product Detail'
                placeholderTextColor={'gray'}
                style={styles.textinputlarge} />
            <TextInput placeholder='Product Description..'
                placeholderTextColor={'gray'}
                style={styles.textinputlarge} />
            <TouchableOpacity
                onPress={() => navigation.navigate('WishList')}>
                <GradientButton style={styles.button}>
                    <Text style={{ color: Color.white, fontWeight: 'bold' }}>Publish</Text>
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
    dropdown: {
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
        borderColor: "#eee",
        color: '#000',
        paddingVertical: 15,
        fontFamily: Font.Regular,

    },
    textinputsmall: {
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
        fontSize: 14,
        borderColor: '#eee',
        paddingHorizontal: 18,
        width: width / 1.09,
        marginLeft: 15,
        alignSelf: 'center',
        fontFamily: Font.Regular,
        padding: 7,
        // elevation:1
    },
    textinputlarge: {
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
        fontSize: 14,
        borderColor: '#eee',
        minHeight: 70,
        maxHeight: 300,
        width: width / 1.09,
        alignSelf: 'center',
        paddingHorizontal: 18,
        marginLeft: 15,
        fontFamily: Font.Regular,
        padding: 5
    },
    button: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: Color.orange,
        alignSelf: 'center',
        paddingHorizontal: 50,
        marginTop: 30,
        color: Color.mainBlack
    }
})