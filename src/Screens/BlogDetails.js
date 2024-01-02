import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import Blogdetailscard from './Blogdetailscard'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Color, height, width, Font } from '../Utils'
import { NewsView } from '../Utils'
import { Directions } from 'react-native-gesture-handler'
import GradientButton from '../Copmponents/GradientButton'
const data = [1, 2, 2]
const pic = 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY='

const BlogDetails = ({ navigation }) => {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <ScrollView style={styles.container}
        // contentContainerStyle={{ alignItems: 'center' }}
        >
            <Image source={{ uri: pic }} style={styles.image} />
            <NewsView
                title={'Number Of Users Seeking Faster Internet Services Hits All-Time High During Pandemic.'}
                description={"When you're stuck inside for weeks on end, what services do you want and need most? A fast, reliable internet connection is topping many folk's lists with all-time reacord in April."} />
            <NewsView
                title={'Number Of Users Seeking Faster Internet Services Hits All-Time High During Pandemic.'}
                description={"When you're stuck inside for weeks on end, what services do you want and need most? A fast, reliable internet connection is topping many folk's lists with all-time reacord in April."}
                description1={"A fast, reliable internet connection is topping many folk's lists with all-time reacord in April."}
            />
            <NewsView
                title={'Limitations & Hurdles to Finding Better Internet.'}
                description={"When you're stuck inside for weeks on end, what services do you want and need most? A fast, reliable internet connection is topping many folk's lists with all-time reacord in April."}
            />
            <View style={styles.icons}>
                <AntDesign style={{ paddingRight: 10 }} type='ant-design' name={isLiked ? "heart" : 'hearto'} size={20} color={Color.gray}
                    onPress={() => setIsLiked(!isLiked)} />
                <TouchableOpacity onPress={() => navigation.navigate('CommentsIcon')}>
                    <EvilIcons name="comment" size={25} color={Color.grey} style={{ paddingRight: 10 }} />
                </TouchableOpacity>
                <AntDesign name="sharealt" size={20} color={Color.grey} />
            </View>
            <Text style={{ alignSelf: 'flex-start', paddingLeft: 20, paddingBottom: 30, paddingTop: 5 }}>100 likes</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', alignSelf: 'flex-start', marginLeft: 20, color: Color.mainBlack }}>Comment and Review</Text>

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Blogdetailscard item={item} navigation={navigation} />} />

            <TextInput style={styles.inputbox}
                placeholder='Write your comments..'
                placeholderTextColor={Color.gray}
                multiline={true}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                <GradientButton style={styles.button}>
                    <Text style={styles.buttontext}>Submit</Text>
                </GradientButton>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
    },
    image: {
        height: 150,
        width: 350,
        margin: 20
    },
    inputbox: {
        minHeight: 100,
        maxHeight: 300,
        backgroundColor: Color.grayShadow,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: Color.black,
        borderWidth: 1,
        borderColor: '#eee',
        width: width / 1.15,
        alignSelf: 'center',
        fontFamily: Font.Regular,
        fontSize:14
    },
    button: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: Color.orange,
        width: width / 3,
        margin: 15,
        alignItems: 'center',
        alignSelf: 'flex-start',
        // marginLeft: 20
    },
    buttontext: {
        fontFamily: Font.Regular,
        color: Color.white
    },
    icons: {
        paddingLeft: 20,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        fontSize:15
    }
})

export default BlogDetails;