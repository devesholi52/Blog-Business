import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet, Modal, FlatList, Pressable, TouchableOpacity } from 'react-native'
import { Color, Font, height, width } from '../Utils';
import AntIcon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native';

const rightData = [
    { value: 'Size', data: [{ value: 'XL' }, { value: 'S' }, { value: 'M' }, { value: 'L' }, { value: 'XS' }] },
    { value: 'Color', data: [{ value: 'RED' }, { value: 'PINK' }] },
    { value: 'Discount', data: [{ value: '10%' }, { value: '30%' }] },
    { value: 'Rating', data: [{ value: '4' }, { value: '7' }] },
    { value: 'Price range', data: [{ value: '1000-1500' }, { value: '1500-2600' }] },
    { value: 'Category', data: [{ value: 'Full' }, { value: 'Half' }] }
]
export default function ProductListingFilter({ modalVisible = false, setModalVisible = () => { } }) {
    const [activeValue, setActiveValue] = useState('size')
    const [leftData, setLeftData] = useState([
        { value: 'Size', isActive: true },
        { value: 'Color', isActive: false },
        { value: 'Discount', isActive: false },
        { value: 'Rating', isActive: false },
        { value: 'Price range', isActive: false },
        { value: 'Category', isActive: false }
    ])

    function LeftIndicator({ text = '', isActive = false }) {
        return (<Pressable style={[styles.box, { backgroundColor: isActive ? '#fff' : '#EEE' }]} onPress={() => {
            let data = leftData
            setActiveValue(text)
            data.filter(e => {
                e.isActive = false
                if (e.value == text) e.isActive = true;
            })
            setLeftData([...data])
        }}>
            <Text style={styles.boxTitle}>{text}</Text>
            {isActive && <AntIcon name="right" size={10} color={Color.black} />}
        </Pressable>)
    }
    return (
        <ScrollView style={styles.upperContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { }} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ color: Color.black, fontSize: 18, fontFamily: Font.Medium }}>Filters</Text>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ color: Color.orange, fontSize: 18, fontFamily: Font.Medium }}>Clear All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: width / 4 }}>
                            <FlatList
                                data={leftData}
                                renderItem={({ item }) => <LeftIndicator text={item.value} isActive={item.isActive} />} />
                        </View>
                        <View style={{}}>
                            <FlatList
                                data={rightData}
                                renderItem={({ item }) => {
                                    return (<>
                                        {(item.value == activeValue) && <>
                                            {item.data.map(e => {
                                                return (
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <AntIcon name="check" size={18} color={Color.orange} style={{paddingLeft:10}}/>
                                                        <Text style={styles.text}>{e.value}</Text>
                                                    </View>)
                                            })}
                                        </>}
                                    </>)
                                }} />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ color: Color.black, fontSize: 18 }}>Close</Text>
                        </TouchableOpacity>
                        <Text style={{ color: Color.orange, fontSize: 18 }}>Apply</Text>
                    </View>

                </View>

            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    upperContainer: {

    },
    container: {
        position: 'absolute',
        // height: height / 2,
        width: width - 50,
        zIndex: 999,
        elevation: 3,
        top: width / 3,
        backgroundColor: Color.white,
        alignSelf: 'center',
        // padding: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 1,
        padding: 10,
        zIndex: 888
    },
    box: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#EEE',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 1,
        width:width/3
    },
    boxTitle: {
        fontSize: 20,
        fontFamily:Font.Medium
    },
    text: {
        fontSize: 16,
        padding: 10,
        fontFamily:Font.Regular
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 4,
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#eee",
        zIndex: 999
    },
})