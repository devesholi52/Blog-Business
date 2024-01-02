import React from 'react'
import { View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Color, width } from '../Utils'
import Icon from 'react-native-vector-icons/AntDesign';
import IconComment from 'react-native-vector-icons/EvilIcons';
import BlogListingCard from './BlogListingCard'
import { useDrawerStatus } from '@react-navigation/drawer';

const data = [{
    photo: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8&w=1000&q=80',
    like: '100 likes',
    title: "Technology-focused blogs have become..",
    date: '12 dec 2022',
    desc: 'information technology is a topic of choice in the blog world-think breaking...',
    button: <Text>Read More</Text>
}, {
    photo: 'https://image.shutterstock.com/image-photo/workplace-winter-background-keayboard-notebook-260nw-713073412.jpg',
    like: '100 likes',
    title: "Technology-focused blogs have become..",
    date: '12 dec 2022',
    desc: 'information technology is a topic of choice in the blog world-think breaking...',
    button: <TouchableOpacity><Text>Read More</Text></TouchableOpacity>
},
{
    photo: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80',
    like: '100 likes',
    title: "Technology-focused blogs have become..",
    date: '12 dec 2022',
    desc: 'information technology is a topic of choice in the blog world-think breaking...',
    button: <TouchableOpacity><Text>Read More</Text></TouchableOpacity>
},
{
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOmOgoZAxpwyQ-LTiEcXI8rZzmRS90ajmJasR4XaC-j-58MsEH_w-9hVubRESXgmuI5M&usqp=CAU',
    like: '100 likes',
    title: "Technology-focused blogs have become..",
    date: '12 dec 2022',
    desc: 'information technology is a topic of choice in the blog world-think breaking...',
    button: <TouchableOpacity><Text>Read More</Text></TouchableOpacity>
},
{
    photo: 'https://image.shutterstock.com/image-photo/workplace-winter-background-keayboard-notebook-260nw-713073412.jpg',
    like: '100 likes',
    title: 'Technology-focused blogs have become..',
    date: '12 dec 2022',
    desc: 'information technology is a topic of choice in the blog world-think breaking...',
    button: <TouchableOpacity><Text>Read More</Text></TouchableOpacity>
},
{
    photo: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8&w=1000&q=80',

    like: '100 likes',
    title: "Technology-focused blogs have become..",
    date: '12 dec 2022',
    desc: 'information technology is a topic of choice in the blog world-think breaking...',
    button: <TouchableOpacity><Text>Read More</Text></TouchableOpacity>
},
]

export default function BlogListing({ navigation }) {
    return (
        <View style={[styles.container,]}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <BlogListingCard data={item} navigation={navigation} />}
                numColumns={1}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    }
})