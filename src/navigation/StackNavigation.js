import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {

    console.log("Stack Navigation");
    return(
        <Stack.Navigator initialRouteName="splashScreen" 
            screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name='Splash Screen' component={SplashScreen} />
          <Stack.Screen name='Log In' component={LoginScreen} />
          <Stack.Screen name='Sign Up' component={SignUpScreen} />
          <Stack.Screen name='OTP Verification' component={OtpVerificationScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Wallet' component={WalletScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

