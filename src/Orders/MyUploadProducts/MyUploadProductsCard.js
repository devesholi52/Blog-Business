import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native'
import { Color, height, width,Font } from '../../Utils'
import Icon from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

export default function MyUploadProductsCard({ data, navigation }) {
    const [isMenu, setIsMenu] = useState(false)
    const [isDropdown, setIsDropdown] = useState(false)

    return (
        <Pressable>
            {/* // onPress={() => navigation.navigate('OrderServiceDetails')}= */}
            <View style={styles.Maincontainer}>
                <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={styles.innerMain}>
                            <Image style={styles.image} source={{ uri: data.photo }} />
                            <View style={styles.textcontainer}>
                                <Text style={styles.title}> {data.title}</Text>
                                <View style={styles.textdesc}>
                                    <Text style={{ fontFamily: 'Roboto-Regular', }}>{data.desc}</Text>
                                </View>
                                <Text style={styles.date}> {data.date}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.iconcontainer}>
                        <TouchableOpacity onPress={() => setIsMenu(!isMenu)}>
                            <Entypo name="dots-three-horizontal" size={14} color={Color.black} style={{paddingRight:10}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsDropdown(!isDropdown)}>
                            <Icon name={isDropdown ? "down" : "right"} size={14} color={Color.black} style={{paddingRight:10}}/>
                        </TouchableOpacity>
                    </View>

                    {isMenu && <View style={styles.menu}>
                        <TouchableOpacity style={styles.closeMenu} onPress={() => setIsMenu(!isMenu)}>
                            <Icon name="closecircleo" size={14} color={Color.black} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="edit" size={14} color={Color.black} style={{ paddingHorizontal: 10, paddingVertical: 10 }} />
                            <Text style={styles.menubtn}>Edit</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="delete" size={14} color={Color.black} style={{ paddingHorizontal: 10, paddingVertical: 10 }} />
                            <Text style={styles.menubtn}>Remove</Text>
                        </View>
                    </View>}
                </View>

                {isDropdown && <View style={styles.productDetailcontainer}>
                    <Text style={{ marginLeft: 15, fontWeight: 'bold' }}>Product Details</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                        <View style={styles.dot} />
                        <Text style={{ marginLeft: 5 }}> Cotton Half Sleeves</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                        <View style={styles.dot} />
                        <Text style={{ marginLeft: 5 }}> Floral Print</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                        <View style={styles.dot} />
                        <Text style={{ marginLeft: 5 }}> Squre Neem Long</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                        <View style={styles.dot} />
                        <Text style={{ marginLeft: 5 }}> Woven Georgette</Text>
                    </View>
                </View>
                }
            </View>

        </Pressable>
    )
}
const styles = StyleSheet.create({
    Maincontainer: {
        elevation: 5,
        backgroundColor: '#fff'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        // borderBottomWidth: 1,
        width: width / 1.05,
        // padding: 10,
        marginTop: 5,
        backgroundColor: Color.white,
        borderRadius: 5,
        borderBottomColor: "#eee"
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
        height: height / 10,
        width: width / 1.7,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 3
    },
    innerMain: {
        padding: 5,
        flexDirection: 'row'
    },
    textcontainer: {
        paddingHorizontal: 10
    },
    textdesc: {
        marginLeft: 3
    },
    title: {
        fontFamily:Font.Medium,
        fontSize: 15,
        color: Color.black
    },
    description: {
        fontSize: 13,
        fontFamily:Font.Medium
    },
    date: {
        fontFamily:Font.Regular,
        fontSize: 13,
        color: Color.black
    },


    iconcontainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
        justifyContent: 'space-between',
        height: 100
    },
    menu: {
        backgroundColor: Color.white,
        elevation: 3,
        position: 'absolute',
        top: 10,
        right: 10,
        width: 100,
        height: 70,
        borderRadius: 8,
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
    dropdown: {
        backgroundColor: Color.white,
        elevation: 3,
        width: width / 1.05,
        padding: 10,
        alignSelf: 'center'
    },
    productDetailcontainer: {
        paddingBottom: 20,
        paddingHorizontal: 10,
    }, dot: {
        height: 6,
        width: 6,
        borderRadius: 10,
        backgroundColor: Color.black
    }

})
