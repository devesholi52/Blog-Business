import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, } from '@react-navigation/drawer';
import { Drawercontent } from './Drawercontent';
import BottomNavigation from './BottomNavigation'
import { View } from 'react-native';
import { Color, width } from '../Utils';
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
    console.log('Drawer', Drawer);
    // const drawerStatus = useDrawerStatus()
    return (
        <View style={{ flex: 1 }}>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '75%',
                        backgroundColor: 'transparent',
                        // paddingRight: 5,
                    },
                    sceneContainerStyle: { backgroundColor: 'transparent' },
                }}
                drawerContent={props => <Drawercontent navigation={props.navigation} {...props} />}
                initialRouteName="BottomNavigation">
                <Drawer.Screen name="BottomNavigation" component={BottomNavigation} navigation={navigation}
                    options={{ headerShown: false, }} />
            </Drawer.Navigator>
        </View>
    );
};

export default DrawerNavigator;
