import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';

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
        </Stack.Navigator>
    )
}

export default StackNavigation

