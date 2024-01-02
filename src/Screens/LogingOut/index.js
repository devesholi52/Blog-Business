import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'

const index = () => {
    const tokenfunc = useSelector(state => state?.user.tokenfunc)

    const logout = async () => {
        await AsyncStorage.clear()
        tokenfunc(false)
    }

    return (
        <TouchableOpacity style={styles.btn} onPress={() => { logout() }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Click to LogOut</Text>
        </TouchableOpacity>
    )
}

export default index

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        backgroundColor: 'blue',
        alignSelf: 'center',

    }

})