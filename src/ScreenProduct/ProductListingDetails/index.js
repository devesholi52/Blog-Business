import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import StarRating from '../../Copmponents/StarRating'
import GradientButton from '../../Copmponents/GradientButton';
import ImageCarousel from '../../Copmponents/ImageCarousel';
// import Styles from '../../Copmponents/CustomDropDown/styles';
import { Color, width, Font, height } from '../../Utils';
import ProductListingDetailscard from './ProductListingDetailscard'
// import Icon from 'react-native-vector-icons/AntDesign';

const data = [1, 3, 2]
const images = [
    { image: 'https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { image: 'https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { image: 'https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { image: 'https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
]

export default function index({ navigation }) {
    return (

        <ScrollView style={styles.container}>
            {(images && images.length !== 0) && <ImageCarousel images={images} isBanners={false} navigation={navigation} />}
            <View style={styles.productcontainer}>
                <Text style={{ fontFamily: Font.Medium, paddingLeft: 2, color: Color.black,fontSize:15 }}>Cotton Half Sleeves Wear</Text>
                <StarRating ratings={'5'} starStyle={{ color: Color.grayShadow, marginTop: 5, marginBottom: 5 }} />
                <View style={styles.pricecontainer}>

                    <Text> <Text style={{ fontFamily: Font.Medium, color: Color.black,fontSize:13 }}>$250 </Text> <Text style={{ fontSize:14,textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid' }}> $350 </Text> <Text style={{ color: Color.orange, fontFamily: Font.Regular,fontSize:14 }}>(25%)</Text></Text>
                
                </View>
            </View>
            <View style={styles.containerselectSize}>
                <Text style={{ fontFamily: Font.Medium, marginLeft: 15, color: Color.black,fontSize:15 }}>Select Size</Text>
                <View style={styles.sizecontainer}>
                    <Text style={styles.sizeBox}> XS </Text>
                    <Text style={styles.sizeBox}> SS </Text>
                    <Text style={styles.sizeBox}> M </Text>
                    <Text style={styles.sizeBox}> LL </Text>
                    <Text style={styles.sizeBox}> XL </Text>
                </View>
            </View>
            <View style={styles.productDetailcontainer}>
                <Text style={{ marginLeft: 15, fontFamily: Font.Medium, color: Color.black, paddingVertical: 5,fontSize:15 }}>Product Details</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 3 }}>
                    <View style={styles.dot} />
                    <Text style={{ marginLeft: 5, fontFamily: Font.Regular, color: Color.black,fontSize:13 }}> Cotton Half Sleeves</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 3 ,fontSize:13}}>
                    <View style={styles.dot} />
                    <Text style={{ marginLeft: 5, fontFamily: Font.Regular, color: Color.black,fontSize:13 }}> Floral Print</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 3,fontSize:13 }}>
                    <View style={styles.dot} />
                    <Text style={{ marginLeft: 5, fontFamily: Font.Regular, color: Color.black,fontSize:13,fontSize:13 }}> Squre Neem Long</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 3,fontSize:13 }}>
                    <View style={styles.dot} />
                    <Text style={{ marginLeft: 5, fontFamily: Font.Regular, color: Color.black,fontSize:13 }}> Woven Georgette</Text>
                </View>
            </View>

            <View style={styles.sizeandfitcontainer}>
                <Text style={{ fontFamily: Font.Medium, marginLeft: 15, color: Color.black,fontSize:15,paddingBottom:5 }}>Size & Fit</Text>
                <Text style={{ marginLeft: 13, fontFamily: Font.Regular, color: Color.black,fontSize:13 }}> The Model (height 57) is waring size M</Text>
            </View>

            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Shopping1')}>
                    <GradientButton style={styles.buttonBuynow}>
                        <Text style={{ fontFamily: Font.Medium, color: Color.white }}>Buy Now</Text>
                    </GradientButton>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCart}>
                    <Text style={{ fontFamily: Font.Medium, color: Color.black }}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: Font.Medium, marginLeft: 15, color: Color.black,fontSize:15 }}> Rating and Reviews</Text>

            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ProductListingDetailscard item={item} />} />
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,


    },
    productcontainer: {
        marginBottom: 20,
        marginLeft: 10,
        marginTop: 15,
        paddingTop: 10,
        borderColor: Color.white,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor:'#f8f8ff'
    },
    containerselectSize: {
        borderColor: Color.white,
        borderWidth: 1,
        paddingTop: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor:'#f8f8ff'
    },
    sizecontainer: {
        marginBottom: 20,
        flexDirection: 'row',
        marginLeft: 12,

    },
    productDetailcontainer: {
        paddingBottom: 20,
        marginTop: 15,
        borderColor: Color.white,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor:'#f8f8ff'
    },
    sizeandfitcontainer: {
        paddingBottom: 20,
        borderColor: Color.white,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        marginTop: 20,
        backgroundColor:'#f8f8ff'
    },
    buttoncontainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 20
    },
    buttonBuynow: {
        // borderWidth: 1,
        borderColor: Color.grayShadow,
        backgroundColor: Color.orange,
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        margin: 15,
        fontSize:14

    },
    buttonCart: {
        borderWidth: 1,
        borderColor: Color.grayShadow,
        backgroundColor: Color.white,
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        margin: 15,
        borderColor: "#eee",
        fontSize:14
    },
    sizeBox: {
        backgroundColor: Color.white,
        padding: 7,
        elevation: 2,
        margin: 4,
        borderRadius: 100,
        paddingTop: 10
    },
    dot: {
        height: 6,
        width: 6,
        borderRadius: 10,
        backgroundColor: Color.black
    }
})

