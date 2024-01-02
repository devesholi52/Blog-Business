import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../../Copmponents/GradientButton';
import { Color, height, width,Font } from '../../Utils';

export default function WishlistCard({ data }) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.photo }} />
            <Text style={styles.title}> {data.title}</Text>
            <Text style={styles.description}> {data.desc}</Text>
            <View style={styles.detailBox}>
                <Text style={[styles.innerDetails, { fontFamily:Font.Medium,color:Color.black }]}>${data.price}</Text>
                <Text style={[styles.innerDetails, {
                    color: Color.gray,
                    fontFamily:Font.Regular,
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid'
                }]}>{data.realprice}</Text>
                <Text style={[styles.innerDetails, { color: Color.orange,fontFamily:Font.Regular }]}>({data.offpercent})</Text>
            </View>
            {/* <View style={styles.dot} />
            <TouchableOpacity style={styles.Close} onPress={() => { setIsLiked(!isLiked) }}>
                <Icon name="close" size={18} color={Color.black} />
            </TouchableOpacity> */}
            <TouchableOpacity >
                <GradientButton style={styles.button}>
                <Text style={styles.buttonText}>Move to bag</Text>
                </GradientButton>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 10,
        width: width / 2.25,
        // height: width / 1.5,
        backgroundColor: Color.white,
        elevation: 3,
        borderRadius: 3,
        // paddingBottom:5
    },
    image: {
        width: "100%",
        height: width / 2.5,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    title: {
        fontFamily:Font.Medium,
        fontSize: 17,
        textAlign: 'left',
        paddingHorizontal: 5,
        paddingVertical: 5,
        color:Color.black
    },
    description: {
        fontFamily:Font.Regular,
        fontSize: 16,
        textAlign: 'left',
        paddingHorizontal: 5
    },
    detailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingTop: 5
    },
    innerDetails: {
        paddingHorizontal: 5,
        fontSize: 14,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: Color.orange,
        marginHorizontal: 10,
        marginTop: 5
    }, Close: {
        position: 'absolute',
        top: 10,
        right: 10,
        elevation: 5,
        borderRadius: 100,
        backgroundColor: Color.white,
      
    },
    button:{
        padding:10,
        backgroundColor:Color.orange,
        alignItems:'center',
        marginTop:22,
    },
    buttonText:{
        color:Color.white,
        fontFamily:Font.Medium
    },
   })