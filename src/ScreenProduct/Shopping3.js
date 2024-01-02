import React from 'react'
import { View, Text, Textinput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import GradientButton from '../Copmponents/GradientButton'
// import Styles from '../Copmponents/CustomDropDown/Styles'
import { Color, width, height, Font } from '../Utils'

export default function Shopping3({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{ fontFamily: Font.Medium, marginBottom: 30, marginTop: 15, fontSize: 16, color: Color.black, marginStart: 30 }}>Payment Option</Text>
                <View style={styles.ImageTextContainer}>
                    <Image source={require('.././assets/img/creditcard.png')} resizeMode="contain" style={styles.imagelogo} />
                    <Text style={styles.textpayingoption}>Credit Card Debit Card</Text>
                </View>
                <View style={styles.ImageTextContainer}>
                    <Image source={require('.././assets/img/apple.png')} resizeMode="contain" style={styles.imagelogo} />
                    <Text style={styles.textpayingoption}>Apple Pay</Text>
                </View>
                <View style={styles.ImageTextContainer}>
                    <Image source={require('.././assets/img/zelle.png')} resizeMode="contain" style={styles.imagelogo} />
                    <Text style={styles.textpayingoption}>Zelle</Text>
                </View>
                <View style={styles.PriceDetailsContainer}>
                    <Text style={{ fontFamily: Font.Medium, fontSize: 16, color: Color.black, paddingBottom: 5 }}>Price Detail</Text>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, fontFamily: Font.Regular, paddingVertical: 3, color: Color.black }}>Total MRP</Text>
                        <Text style={{ fontFamily: Font.Medium, paddingVertical: 3, color: Color.black,fontSize: 13 }}>$350</Text>
                    </View>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, fontFamily: Font.Regular, paddingVertical: 3, color: Color.black }}>Discount Price</Text>
                        <Text style={{ fontFamily: Font.Medium, paddingVertical: 3, color: Color.black,fontSize: 13 }}>-$70</Text>
                    </View>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, fontFamily: Font.Regular, paddingVertical: 3, color: Color.black }}>Convenience Fee</Text>
                        <Text style={{ fontFamily: Font.Medium, paddingVertical: 3, color: Color.black,fontSize: 13 }}>Free</Text>
                    </View>
                </View>

                <View style={styles.containerTotalamount}>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black, fontSize: 16 }}>Total Amount</Text>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black,fontSize: 13 }}>$280</Text>
                </View>
            </View>



            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Confirmation')}>
                    <GradientButton style={styles.button}>
                        <Text style={{ fontFamily: Font.Medium, fontSize: 15, color: Color.white }}>Pay Now</Text>
                    </GradientButton>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        flex: 1,
        // justifyContent: 'space-between',
        paddingBottom: height / 4,
    },
    mainContainer: {
        flexDirection: 'row',
        margin: 30,
        alignItems: 'flex-start',
        backgroundColor: Color.grayShadow,
        height: height / 5,
        elevation: 1
    },
    imagelogo: {
        height: 20,
        width: 20
    },
    textpayingoption: {
        fontFamily: Font.Regular,
        marginVertical: 12,
        // borderWidth: 1,
        paddingHorizontal: 15,
        borderColor: "#eee",
        // marginStart: 30,
        // marginEnd: 20,
        // borderRadius: 8,
        color: Color.black,
        fontSize: 13
    },
    PriceDetailsContainer: {
        backgroundColor: '#f8f8ff',
        // borderWidth: 1,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 35,
        marginLeft: 20,
        borderRadius: 8,

    },
    innerMain: {
        paddingHorizontal: 20,
        padding: 5,
    },
    image: {
        height: height / 5,
        width: width / 4,
    },
    containerSizeQty: {
        flexDirection: 'row',
        fontSize: 13,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    containerprice: {
        flexDirection: 'row',
        fontSize: 13,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    containerPriceDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerTotalamount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 30,
        backgroundColor: '#eee',
        // borderWidth: 1,
        padding: 10,
        marginHorizontal: 20,
        margin: 30,
        marginLeft: 20,
        borderRadius: 8,
        backgroundColor: '#f8f8ff'
    },
    button: {
        // borderWidth: 1,
        alignSelf: 'center',
        padding: 12,
        borderRadius: 18,
        backgroundColor: Color.orange,
        width: width / 1.3,
        alignItems: 'center',
        borderColor: Color.grayShadow,
        marginTop: height / 8
    },
    ImageTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        margin: 10,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8
    },
})