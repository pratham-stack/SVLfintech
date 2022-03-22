import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {

    console.log("Stack Navigation");
    return(
        <Stack.Navigator initialRouteName="splashScreen" 
            screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name='Splash Screen' component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

