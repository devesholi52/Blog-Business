import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native'
import { Color, height, width, Font } from '../../Utils'
import Dot from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

export default function MyServiceCard({ data, navigation }) {
    const [isMenu, setIsMenu] = useState(false)

    return (
        <Pressable
            onPress={() => navigation.navigate('Inbox')}
            >
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.innerMain}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.image} source={{ uri: data.photo }} />
                            <View style={styles.textcontainer}>
                                <Text style={styles.title}> {data.title}</Text>
                                <View style={styles.textdesc}>
                                    <Text style={{ fontFamily: Font.Regular, paddingVertical: 5 }}>{data.desc}</Text>
                                </View>
                                <Text style={styles.date}> {data.date}</Text>
                            </View>
                        </View>
                    </View>
                    {/* <View style={styles.iconcontainer}> */}
                    <TouchableOpacity onPress={() => setIsMenu(!isMenu)}>
                        <Dot name="dots-three-horizontal" size={15} color={Color.black} style={{ paddingLeft: width / 5,paddingTop:23 }} />
                    </TouchableOpacity>
                    
                    {isMenu && <View style={styles.menu}>
                        <TouchableOpacity style={styles.closeMenu} onPress={() => setIsMenu(!isMenu)}>
                            <Icon name="closecircleo" size={13} color={Color.black} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="edit" size={13} color={Color.black} style={{ paddingHorizontal: 10, paddingVertical: 10 }} />
                            <Text style={styles.menubtn}>Edit</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="delete" size={13} color={Color.black} style={{ paddingHorizontal: 10, paddingVertical: 10 }} />
                            <Text style={styles.menubtn}>Delete</Text>
                        </View>
                    </View>}
                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        width: width / 1.05,
        // padding: 10,
        marginTop: 5,
        backgroundColor: Color.white,
        elevation: 3,
        borderRadius: 5,
    },
    mainContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        // backgroundColor: Color.white,
        // height: height / 8,
        // width: width / 1.8,
        // backgroundColor:'red'

    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 3,
        marginTop: 18
    },
    innerMain: {
        padding: 5,
        flexDirection: 'row',
        // backgroundColor: 'red',
        paddingVertical: 10,
        width: width / 1.5
    },
    textcontainer: {
        padding: 10
    },
    textdesc: {
        marginLeft: 3
    },
    title: {
        fontFamily: Font.Medium,
        fontSize: 15,
        color: Color.black
    },
    description: {
        fontSize: 13,
        fontFamily: Font.Regular
    },
    date: {
        fontFamily: Font.Regular,
        fontSize: 13,
        color: Color.black
    },
    menu: {
        backgroundColor: Color.white,
        elevation: 3,
        position: 'absolute',
        top: 10,
        right: 10,
        width: 150
    },
    closeMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    
    menubtn: {
        fontSize: 13,
        paddingVertical: 10,
        color: Color.black
    },
})
