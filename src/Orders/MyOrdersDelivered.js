import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal, } from 'react-native'
import StarRating from '../Copmponents/StarRating'
import { color } from 'react-native-reanimated'
import { Color, width, height, Font } from '../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import GradientButton from '../Copmponents/GradientButton'

export default function MyOrdersDelivered({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.containerModal}>

                    <Text style={styles.textReview}>Review</Text>
                    <TouchableOpacity style={styles.iconModal}
                        onPress={() => setModalVisible(false)}>
                        <Icon name="closecircle" size={18} color={Color.black} style={{ padding: 10 }} />
                    </TouchableOpacity>
                    <StarRating ratings={'5'} starStyle={{ color: '#eee', marginTop: height / 12, margin: 5 }} />
                    <TextInput style={styles.textinputmodal}
                        placeholder='Enter review' />
                    <TouchableOpacity >
                        <GradientButton style={styles.buttonmodal}>
                            <Text style={{ color: Color.white, fontFamily: Font.Medium }}>Submit</Text>
                        </GradientButton>
                    </TouchableOpacity>
                </View>
            </Modal>
            <ScrollView style={[styles.container, modalVisible ? { opacity: 0.3 } : Color.white]}>
                {/* <View> */}
                <View style={styles.mainContainer}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgje9ysJyrOS9rx99BXE39l7D2Qp-9Um043A&usqp=CAU' }}
                        style={styles.image} />
                    <View style={styles.innerMain}>
                        <Text style={{ fontFamily: Font.Medium, fontSize: 13, color: Color.black }}>Cotton Half Sleeves Wear</Text>
                        <View style={styles.containerSizeQty}>
                            <Text style={{ fontFamily: Font.Regular }}> size1</Text>
                            <Text> Qty1</Text>
                        </View>
                        <View style={styles.containerprice}>
                            <Text style={{ fontFamily: Font.Bold, color: Color.black }}>$250</Text>
                            <Text>$350</Text>
                            <Text style={{ fontFamily: Font.Bold, color: Color.orange }}>(25%)</Text>
                        </View>

                        <Text style={{ marginVertical: 10, color: Color.black, fontFamily: Font.Regular }}>Delivered by 28feb 2022</Text>
                    </View>
                </View>
                <View style={styles.imageText}>
                    <Text style={styles.TotalEarning}>Delivered </Text>
                    <Text style={styles.text}>on Sun,15.Feb 2022</Text>
                </View>

                <View style={{ marginVertical: 30, marginHorizontal: 18, borderWidth: 1, backgroundColor: '#f8f8ff', borderColor: '#eee', padding: 10, borderRadius: 12 }}>
                    <Text style={{ fontFamily: Font.Bold, fontSize: 15, color: Color.black, marginVertical: 10 }}>Delivery Address</Text>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black, }}>Jhon Mathew</Text>
                    <Text style={{ color: Color.black, fontFamily: Font.Regular }}>Romanian M.Society 9520 Faires Farm Road, </Text>
                    <Text style={{ color: Color.black, fontFamily: Font.Regular }}>Charlotte,NC 28213</Text>
                </View>
                <View style={{ marginVertical: 30, marginHorizontal: 18, borderWidth: 1, backgroundColor: '#f8f8ff', borderColor: '#eee', padding: 10, borderRadius: 12 }}>
                    <Text style={{ fontFamily: Font.Bold, fontSize: 15, color: Color.black, marginVertical: 10 }}>Price Detail</Text>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, color: Color.black, fontFamily: Font.Regular }}>Total MRP</Text>
                        <Text style={{ fontFamily: Font.Medium, color: Color.black }}>$350</Text>
                    </View>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, color: Color.black, fontFamily: Font.Regular }}>Discount Price</Text>
                        <Text style={{ fontFamily: Font.Medium, color: Color.black }}>-$70</Text>
                    </View>

                    <View style={styles.containerPriceDetail}>
                        <Text style={{ fontSize: 13, color: Color.black, fontFamily: Font.Regular }}>Convenience Fee</Text>
                        <Text style={{ fontFamily: Font.Medium, color: Color.black }}>Free</Text>
                    </View>
                </View>

                <View style={styles.containerTotalamount}>
                    <Text style={{ fontFamily: Font.Bold, color: Color.black }}>Total Amount</Text>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black }}>$280</Text>
                </View>
                {/* </View> */}
                <View style={styles.bottomtextcontainer}>
                    <Text style={{ paddingVertical: 5, fontFamily: Font.Regular }}>24 Sept,2021</Text>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black }}>Dummy Text</Text>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}>
                        <GradientButton style={styles.buttonEdit}>
                            <Text style={{ fontSize: 15, color: Color.white, fontFamily: Font.Medium }}>Edit Review</Text>
                        </GradientButton>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonDelete, { backgroundColor: Color.white }]}>
                        <Text style={{ fontSize: 15, color: Color.black, fontFamily: Font.Medium }}>Delete Review</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        flex: 1,
    },
    mainContainer: {
        flexDirection: 'row',
        margin: 30,
        alignItems: 'flex-start',
        height: height / 6,
        // backgroundColor: Color.red,
    },
    image: {
        height: height / 6,
        width: width / 3.5,
    },
    image12: {
        // padding: 30,
        // // margin: 10,
        // marginLeft: 26,
        height: width / 7,
        width: width / 1.15,
        alignSelf: "center"

    },
    imageText: {
        width: width / 1.1,
        backgroundColor: Color.blue,
        alignSelf: 'center',
        alignItems: 'flex-start',
        padding: 10,
        borderRadius: 5
    },
    TotalEarning: {
        color: Color.white,
        fontSize: 15,
        fontFamily: Font.Bold
    },
    text: {
        color: Color.white,
        fontSize: 13,
        fontFamily: Font.Regular
    },
    innerMain: {
        paddingHorizontal: 20,
        // padding: 5,

    },

    containerSizeQty: {
        flexDirection: 'row',
        fontSize: 15,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    containerprice: {
        flexDirection: 'row',
        fontSize: 15,
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
        borderWidth: 1,
        backgroundColor: '#f8f8ff',
        borderColor: '#eee',
        padding: 10,
        marginHorizontal: 18,
        // width: width / 1.,
        borderRadius: 12

    },
    bottomtextcontainer: {
        borderWidth: 1,
        backgroundColor: '#f8f8ff',
        borderColor: '#eee',
        // marginTop:60,
        // marginBottom:30
        marginHorizontal: 18,
        marginVertical: 30,
        padding: 10,
        borderRadius: 10
    },
    buttoncontainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    buttonEdit: {
        // borderWidth: 1,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: Color.orange,
        // width: width / 2.7,
        alignItems: 'center',
        borderColor: Color.grayShadow,
        margin: 15,
        fontFamily: Font.Medium,
        paddingHorizontal: 25
    },
    buttonDelete: {
        borderWidth: 1,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 12,
        backgroundColor: Color.orange,
        // width: width / 2.7,
        alignItems: 'center',
        borderColor: "#eee",
        margin: 15,
        fontFamily: Font.Medium,
        paddingHorizontal: 25
    },
    containerModal: {
        // height: height / 2.7,
        width: width / 1.2,
        backgroundColor: Color.white,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: "center",
        top: width / 1.4,
        // elevation:2
    },
    textReview: {
        fontFamily: Font.Bold,
        fontSize: 17,
        alignSelf: 'center',
        color: Color.black,
        paddingTop: 25

    },
    iconModal: {
        position: 'absolute',
        top: 0,
        right: 0

    },

    textinputmodal: {
        padding: 25,
        backgroundColor: '#eee',
        marginHorizontal: 10,
        borderRadius: 5,
        fontFamily: Font.Regular,
        color: Color.black

    },
    buttonmodal: {
        backgroundColor: Color.orange,
        alignSelf: 'center',
        padding: 8,
        paddingHorizontal: 35,
        borderRadius: 10,
        margin: 30,
        fontFamily: Font.Medium
    }

})