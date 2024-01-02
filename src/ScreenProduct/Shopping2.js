import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GradientButton from '../Copmponents/GradientButton'
import { Color, height, width, Font } from '../Utils'
// import Styles from '../Copmponents/CustomDropDown/styles'

export default function Shopping2({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontFamily: Font.Medium, color: Color.black, padding: 10, fontSize: 16 }}>Contact Details</Text>
            <View style={styles.containerContact}>
                <TextInput
                    placeholder='Name*'
                    placeholderTextColor={Color.gray}
                    style={styles.inputbox}
                />

                <TextInput
                    placeholder='Mobile No*'
                    placeholderTextColor={Color.gray}
                    style={styles.inputbox} />

            </View>
            <View style={styles.containerAddress}>
                <Text style={{ fontFamily: Font.Medium, color: Color.black, padding: 10, fontSize: 16 }}>Address</Text>
                <TextInput
                    placeholder='Full Address'
                    placeholderTextColor={Color.gray}
                    style={styles.inputbox} />
                <TextInput
                    placeholder='Locality/Town'
                    placeholderTextColor={Color.gray}
                    style={styles.inputbox} />
                <TextInput
                    placeholder='Pin Code*'
                    placeholderTextColor={Color.gray}
                    style={styles.inputbox} />

                <View style={styles.TextinputflexDerection}>
                    <TextInput
                        placeholder='City*'
                        placeholderTextColor={Color.gray}
                        style={styles.inputboxcity} />
                    <TextInput
                        placeholder='State*'
                        placeholderTextColor={Color.gray}
                        style={styles.inputboxstate} />
                </View>

            </View>
            <Text style={{ fontFamily: Font.Medium, color: Color.black, padding: 10, fontSize: 16 }}>Save Address As</Text>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity >
                    <GradientButton style={styles.buttonhome}>
                        <Text style={{ fontFamily: Font.Medium, color: Color.white, fontSize: 14 }}>Home</Text>
                    </GradientButton>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonwork}>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black, fontSize: 14 }}>Work</Text>
                </TouchableOpacity >
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Shopping3')}>
                <GradientButton style={styles.buttonAddress}>
                    <Text style={{ fontFamily: Font.Medium, color: Color.white, fontSize: 15 }}>Save Address</Text>
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
    inputbox: {
        borderWidth: 1,
        borderColor: '#eee',
        margin: 10,
        padding: 5,
        borderRadius: 8,
        color: Color.green,
        paddingLeft: 10,
        fontFamily: Font.Regular
    },
    containerAddress: {
        marginVertical: 20
    },


    TextinputflexDerection: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal:10
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputboxcity: {

        borderRadius: 8,
        borderWidth: 1,
        // // width: width / 2.23,
        // // margin: 10,
        // // alignItems: "flex-start",
        borderColor: '#eee',
        // paddingLeft: 10,
        padding:5,
        // marginRight:40,
        paddingHorizontal:50,
    },
    inputboxstate: {

        // width: width / 2.23,
        borderRadius: 8,
        borderWidth: 1,
        // // margin: 10,
        borderColor: '#eee',
        // paddingLeft: 10,
        paddingHorizontal:50,
        padding:5,
        marginRight:40
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',


    },
// 
    buttonwork: {
        borderRadius: 16,
        backgroundColor: Color.white,
        borderColor: '#eee',
        padding: 8,
        margin: 15,
        width: width / 3,
        borderWidth: 1,
        alignItems: 'center',
        borderWidth: 1
    },
    buttonhome: {
        borderRadius: 16,
        backgroundColor: Color.orange,
        // borderColor: Color.grayShadow,
        padding: 8,
        margin: 15,
        width: width / 3,
        // borderWidth: 1,
        alignItems: 'center',
        // paddingHorizontal:30
    },
    buttonAddress: {
        // borderWidth: 1,
        alignSelf: 'center',
        width: width / 1.3,
        padding: 10,
        marginTop: 60,
        backgroundColor: Color.orange,
        // borderColor: Color.grayShadow,
        borderRadius: 12,
        alignItems: 'center',
    },
})