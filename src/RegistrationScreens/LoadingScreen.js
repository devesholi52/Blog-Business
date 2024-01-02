// import React, { useEffect } from 'react'
// import { Text,StyleSheet } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux';
// import Styles from '../Copmponents/CustomDropDown/Styles';
// import { changeTokenValue, setUserInfo } from '../redux/Actions/UserAction';
// import { Font, height } from '../Utils';


// export default function LoadingScreen({ navigation }) {
//     const dispatch = useDispatch();
//     const tokenfunc = useSelector(state => state?.user?.tokenfunc);
//     useEffect(() => {
//         setTimeout(() => {
//             // dispatch(changeTokenValue(true));
//             // // AsyncStorage.setItem('token', res.key);
//             // tokenfunc(true);
//             navigation.navigate('splash')
//         }, 2000);
//     }, [])

//     return (
//         <>
//             <Text style={styles.text}>Loading...</Text>
//         </>
//     )
// }

// const styles=StyleSheet.create({
//     text:{
//         fontSize:25,
//         fontFamily:Font.Bold,
//         alignSelf:'center',
//         justifyContent:'center'
//     },
// })