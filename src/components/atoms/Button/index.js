import * as React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import {View,StyleSheet} from 'react-native'

const Button = ({icon, variant,buttonStyle,color,labelStyle,handleOnPress,label}) => {
    return(
        <PaperButton icon={icon}
                mode={variant}
                style={buttonStyle}
                color={color} 
                labelStyle={labelStyle}
                onPress={() => handleOnPress()}>
           {label}
        </PaperButton>
    );
}

export default Button;

export const ButtonStyles = StyleSheet.create({
    splashButtonStyle: {
        fontWeight: 'bold'
    }
});