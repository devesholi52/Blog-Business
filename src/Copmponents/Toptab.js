import React, { } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { width, Color, Font } from '../Utils'

const Toptab = ({ data = [], activeTab = '1', setActiveTab = () => { } }) => {
    return (
        <View style={{ width: width, padding: 10 }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => i.toString()}
                data={data}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <View style={[style.topBarContainer, { backgroundColor: activeTab == index + 1 ? Color.orange : '#EEE' }]}>
                        <TouchableOpacity style={style.topBarItemContainer}
                            onPress={() => setActiveTab(index + 1)}>
                            <Text style={[style.topBarItemText, {
                                fontSize: 14, padding: 5,paddingVertical:10,
                                color: activeTab == index + 1 ? Color.white : '#000'
                            }]}>{item}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default Toptab

const style = StyleSheet.create({
    topBarContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: width / 3.14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBarItemContainer: {
        flexDirection: 'column',
        paddingHorizontal: 5,
        padding:-5,
        // backgroundColor:'red'
    },
    topBarItemText: {
        color: 'black',
        textAlign: 'center',
        fontFamily:Font.Medium
    },


})