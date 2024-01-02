import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from '../RegistrationScreens/LoadingScreen'
import Splash from '../RegistrationScreens/Splash';
import Signin from '../RegistrationScreens/Signin';
import Signup from '../RegistrationScreens/Signup';
import Otp from '../RegistrationScreens/Otp';
import Forgetpass from '../RegistrationScreens/Forgetpass';
import Passwordreset from '../RegistrationScreens/Passwordreset';

const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator >
            {/* <Stack.Screen options={{ headerShown: false }} name="LoadingScreen" component={LoadingScreen} /> */}
            <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
            <Stack.Screen name="Forgetpass" component={Forgetpass} options={{ headerShown: false }} />
            <Stack.Screen name="Passwordreset" component={Passwordreset} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export default StackNavigation;
