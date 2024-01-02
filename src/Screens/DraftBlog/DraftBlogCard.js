import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Image, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
import { width, Color,Font } from '../../Utils'

export default function DraftBlogCard() {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <View style={styles.container}>
            {/* <Text style={styles.date}>02/01/2022,14:30</Text> */}
            <View style={styles.mainContainer}>
                <View style={styles.imageView}>
                    <Image source={require('../../assets/img/bgImg.jpg')} style={styles.image} />
                    <View style={styles.textcontainer}>
                        <Text style={{ fontSize: 15,fontFamily:Font.Medium, color: Color.black }}>Technology-focused blogs has bec one of the easiest.</Text>
                        <Text style={{ color: Color.gray, fontSize: 13, paddingVertical: 5,fontFamily:Font.Regular }}>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.dots} onPress={() => setIsMenu(!isMenu)}>
                    <Entypo name='dots-three-vertical' size={15} color={Color.gray} />
                </TouchableOpacity>

                {isMenu && <View style={styles.menu}>
                    <TouchableOpacity style={styles.closeMenu} onPress={() => setIsMenu(!isMenu)}>
                        <Icon name="closecircleo" size={18} color={Color.black} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="edit" size={16} color={Color.blue} style={{ paddingHorizontal: 10,paddingVertical:5  }} />
                        <Text style={styles.menubtn}>Edit</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="delete" size={16} color={Color.blue} style={{ paddingHorizontal: 10,paddingVertical:5 }} />
                        <Text style={styles.menubtn}>Delete</Text>
                    </View>
                </View>}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        margin: 10,
        // marginHorizontal: width / 10,
        borderColor: "#eee",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    mainContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // paddingTop: 10,
        // backgroundColor:'red'

    },
    date: {
        // alignSelf: 'flex-end',
        // paddingHorizontal: 40
        position: 'absolute',
        top: 0,
        bottom: 0,
        alignSelf: 'flex-end',
        padding: 10
    },

    imageView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 100,
        // marginRight: 5
    },
    textcontainer: {
        width: width / 1.4,
        paddingHorizontal: 10
    },
    dots: {
        // alignSelf: 'flex-end',
        // position: 'absolute',
        // top: 10,
        // right: 10,
        zIndex: 999,
        elevation: 4
    },
    closeMenu: {
        // position: 'absolute',
        // top: 10,
        // right: 10,
        alignSelf:'flex-end'
    },
    menubtn: {
        fontSize: 14,
        paddingVertical: 5,
        color: Color.black,
        fontFamily:Font.Regular
        
    },
    menu: {
        backgroundColor: Color.white,
        elevation: 3,
        position: 'absolute',
        top: 10,
        right: 10,
        width: 120,
        height: 80,
        borderRadius: 8,
    },
})
