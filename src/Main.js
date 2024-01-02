import React, { useRef, useState, useEffect } from 'react'
// import { View, Platform, PermissionsAndroid } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './Navigation/DrawerNavigation'
// import BottomNavigation from './Navigation/BottomNavigation'
import StackNavigation from './Navigation/StackNavigation'
import { changeTokenValue, setTokenFunction, setUserInfo, } from './redux/Actions/UserAction'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux';
import { Color, } from './Utils';

export default function Main({ navigation }) {
    const [tokenvalue, setTokenvalue] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        checkToken()
        dispatch(setTokenFunction(IsloggedIn));
    }, []);

    const UserData = async (token) => {
        try {
            let data = await AsyncStorage.getItem('userinfo');
            data = JSON.parse(data);
            dispatch(setUserInfo(data));
            setTokenvalue(token);
            dispatch(changeTokenValue(token));
        } catch (error) {
            console.log('err from main UserData function::', error);
        }
    };
    const checkToken = async () => {
        let token = await AsyncStorage.getItem('token');
        console.log('token is :', token);
        if (token) UserData(token);

    };
    const IsloggedIn = (data) => setTokenvalue(data);

    return (
        <>
            {tokenvalue ? <DrawerNavigation /> : <StackNavigation navigation={navigation} />}
        </>
    )
}
