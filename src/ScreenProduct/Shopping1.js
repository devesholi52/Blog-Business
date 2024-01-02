import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import CustomDropDown from '../Copmponents/CustomDropDown'
import GradientButton from '../Copmponents/GradientButton'
import { Color, height, width, Font } from '../Utils'
import { Picker } from '@react-native-picker/picker';

export default function Shopping1({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState('Java');

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
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.mainContainer}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNIaMlms62ZGWds9FRUPSwnpoGIhaY15tdQ&usqp=CAU' }}
                        style={styles.image} />
                    <View style={styles.innerMain}>
                        <Text style={{ fontFamily: Font.Medium, fontSize: 15, color: Color.black }}>Cotton Half Sleeves Wear</Text>
                        <View style={styles.containerSizeQty}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontFamily: Font.Regular, }}> Size</Text>
                                {/* <Text style={{ fontSize: 15, paddingHorizontal: 10, fontFamily: Font.Medium, }}>1</Text> */}

                                <Picker
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                                    mode='dropdown'
                                    style={{ color: '#000', width: 40 }}
                                    itemStyle={{ color: '#000' }}       >
                                    <Picker.Item label="4" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>

                                {/* {(!!category && category.length !== 0) &&
                                    <CustomDropDown styles={styles.dropdown}
                                        bottomstyles={{ width: width / 3 }}
                                        data={category} placeholder="1" onChangeValue={onSelectBusinessCategory} />} */}
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontFamily: Font.Regular, }}> Qty </Text>
                                {/* <Text style={{ fontSize: 15, paddingHorizontal: 10, fontFamily: Font.Medium, }}>1</Text> */}
                                {/* {(!!category && category.length !== 0) &&
                                    <CustomDropDown styles={styles.dropdown}
                                        bottomstyles={{ width: width / 3 }}
                                        data={category} placeholder="1" onChangeValue={onSelectBusinessCategory} />} */}
                                <Picker
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                                    mode='dropdown'
                                    style={{ color: '#000', width: 60, }}
                                    itemStyle={{ color: '#000' }}       >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.containerprice}>
                            <Text style={{ fontFamily: Font.Medium, color: Color.black }}>$250</Text>
                            <Text style={{ fontFamily: Font.Regular, color: Color.black,
                            textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid'
                             }}>$350</Text>
                            <Text style={{ fontFamily: Font.Medium, color: Color.orange }}>(25%)</Text>
                        </View>

                        <Text style={{ fontFamily: Font.Regular, marginVertical: 10, color: Color.black }}>Delivered by 28feb 2022</Text>
                    </View>
                </View>
                <View style={styles.PriceDetailContainer}>
                    <Text style={{ fontFamily: Font.Medium, fontSize: 15, color: Color.black, paddingVertical: 5 }}>Price Detail</Text>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, fontFamily: Font.Regular, color: Color.black, paddingVertical: 3 }}>Total MRP</Text>
                        <Text style={{ fontFamily: Font.Medium, color: Color.black, paddingVertical: 3 }}>$350</Text>
                    </View>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, fontFamily: Font.Regular, color: Color.black, paddingVertical: 3 }}>Discount Price</Text>
                        <Text style={{ fontFamily: Font.Medium, color: Color.black, paddingVertical: 3 }}>-$70</Text>
                    </View>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, fontFamily: Font.Regular, color: Color.black, paddingVertical: 3 }}>Convenience Fee</Text>
                        <Text style={{ fontFamily: Font.Medium, color: Color.black, paddingVertical: 3 }}>Free</Text>
                    </View>
                </View>

                <View style={styles.containerTotalamount}>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black, fontSize: 13, paddingVertical: 3 }}>Total Amount</Text>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black, paddingVertical: 3 }}>$280</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Shopping2')}>
                <GradientButton style={styles.button}>
                    <Text style={{ fontFamily: Font.Medium, fontSize: 16, color: Color.white }}>Place Order</Text>
                </GradientButton>
            </TouchableOpacity>
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
        // backgroundColor: Color.grayShadow,
        height: height / 6,
        // elevation: 1
    },
    innerMain: {
        paddingHorizontal: 20,
        padding: 5,
    },
    image: {
        height: height / 6.3,
        width: width / 3.4,
    },
    containerSizeQty: {
        flexDirection: 'row',
        fontSize: 13,
        // marginVertical: 10,
        // justifyContent: 'space-between'
    },
    PriceDetailContainer: {
        borderColor: Color.white,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        margin: 30,
        borderRadius: 8,
        backgroundColor: '#f8f8ff'
    },
    containerprice: {
        flexDirection: 'row',
        fontSize: 13,
        // marginVertical: 10,
        justifyContent: 'space-between'
    },
    containerPriceDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    containerTotalamount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 30,
        borderColor:Color.white,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: "#f8f8ff"
    },
    button: {
        // borderWidth: 1,
        alignSelf: 'center',
        padding: 12,
        borderRadius: 12,
        backgroundColor: Color.orange,
        width: width / 1.2,
        alignItems: 'center',
        borderColor: Color.grayShadow,
        marginTop: height / 6,

    },
    dropdown: {
        // borderWidth: 1,
        // borderRadius: 15,
        // margin: 10,
        // padding: 10,
        borderColor: "#eee",
        // backgroundColor: 'red',
        width: width / 10,
        height: 5,
        padding: 5,
        marginHorizontal: 5
    },

})