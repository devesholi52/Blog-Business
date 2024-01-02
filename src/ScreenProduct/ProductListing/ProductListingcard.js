import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Color, width, Font } from '../../Utils';

export default function ProductListingcard({ data, navigation }) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.navigate('ProductListingDetails')}>
            <Image style={styles.image} source={data.photo} />
            <Text style={styles.title}> {data.title}</Text>
            <Text style={styles.description}> {data.desc}</Text>
            <View style={styles.detailBox}>
                <Text style={[styles.innerDetails, { fontFamily: Font.Medium, color: Color.black }]}>${data.price}</Text>
                <Text style={[styles.innerDetails, {
                    color: Color.gray,
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid'
                }, { fontFamily: Font.Regular }]}>{data.realprice}</Text>
                <Text style={[styles.innerDetails, { color: Color.orange }, { fontFamily: Font.Medium }]}>{data.offpercent}</Text>
            </View>
            <View style={styles.dot} />
            <TouchableOpacity style={styles.heart} onPress={() => { setIsLiked(!isLiked) }}>
                <Icon name="heart" size={22} color={isLiked ? Color.red : Color.grayShadow} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 10,
        width: width / 2.2,
        // height: width / 1.5,
        backgroundColor: Color.white,
        elevation: 5,
        borderRadius: 3,
        paddingBottom: 5
    },
    image: {
        width: '100%',
        height: width / 2.5,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    title: {

        fontSize: 15,
        textAlign: 'left',
        paddingHorizontal: 5,
        marginTop: 5,
        fontFamily: Font.Medium,
        color: Color.black
    },
    description: {
        fontFamily: Font.Regular,
        fontSize: 13,
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
        fontSize: 13,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: Color.orange,
        marginHorizontal: 10,
        marginTop: 5
    },
    heart: {
        position: 'absolute',
        top: 10,
        right: 10,
        elevation: 5
    }
})