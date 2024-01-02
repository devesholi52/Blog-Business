import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import GradientButton from '../Copmponents/GradientButton';
import { Color, width, height, Font } from '../Utils';


export default function ProductListingcard({ data, navigation }) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.navigate('BlogDetails')}>
            <Image source={{ uri: data.photo }} style={styles.image} />
            <View style={styles.iconContainer}>
                <Icon style={styles.icon} type='ant-design' name={isLiked ? "heart" : 'hearto'} size={20} color={Color.gray}
                    onPress={() => setIsLiked(!isLiked)}/>
                <TouchableOpacity
                style={{marginHorizontal:8}}
                onPress={() => navigation.navigate('CommentsIcon')}>
                    <Icon style={styles.icon} type='evilIcons' name="comment" size={20} color={Color.gray} />
                </TouchableOpacity> 
                <Icon style={styles.icon} type='ant-design' name="sharealt" size={20} color={Color.gray} />
            </View>
            <Text style={styles.like}>{data.like}</Text>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.date}>{data.date}</Text>
            <Text style={styles.desc}>{data.desc}</Text>

            {/* <TouchableOpacity>
                <GradientButton style={styles.button}>
                    <Text style={{ color: Color.white, fontWeight: 'bold', fontSize: 15 }}>Read More</Text>
                </GradientButton>
            </TouchableOpacity> */}


        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // height: height / 2.6,
        // width: width / 2.22,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 12,
        // alignItems:'center',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
        paddingBottom: 7
    },
    image: {
        height: 200,
        width: width - 25,
        // width: width / 2.22,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    iconContainer: {
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 5,
        paddingTop: 10
    },
    icon: {
        paddingHorizontal: 5
    },
    date: {
        fontSize: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: Color.gray,
        fontFamily: Font.Regular
    },
    title: {
        fontSize: 15,
        paddingHorizontal: 10,
        color: Color.mainBlack,
        fontFamily: Font.Medium

    },
    desc: {
        color: Color.gray,
        paddingHorizontal: 10,
        fontFamily: Font.Regular,
        fontSize: 13,

    },
    like: {
        marginBottom: 10,
        color: Color.gray,
        paddingHorizontal: 10,
        fontFamily: Font.Regular
    },
    button: {
        // borderWidth: 1,
        borderRadius: 15,
        alignSelf: 'center',
        margin: 20,
        padding: 10,
        paddingHorizontal: width / 8,
        backgroundColor: Color.orange
    },
})