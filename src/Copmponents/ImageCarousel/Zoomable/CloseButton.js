import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-vector-icons/AntDesign'

export default function CloseButton({ onClose }) {
    return (
        <TouchableOpacity style={style.btn} onPress={onClose}>
            <Icon name="close" color={"#000"} size={20} />
        </TouchableOpacity>
    )
}
const style = StyleSheet.create({
    btn: {
        backgroundColor: '#EEE',
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        borderRadius: 20,
        elevation: 5,
        zIndex: 999
    }
})