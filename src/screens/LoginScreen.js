import React from 'react';
import { View,Image,StyleSheet,KeyboardAvoidingView} from "react-native";
import theme, {textInputGreyBorder} from '../theme';
import Typography from '../components/atoms/Typography';
import { TextStyles } from '../components/atoms/Typography';
import {TextInput as PaperTextInput} from 'react-native-paper';
import TextInput from '../components/atoms/TextInput';
import { LOG_IN_SCREEN } from '../utils/string';
import Button, { ButtonStyles } from '../components/atoms/Button';
import { StackActions } from '@react-navigation/native';

const walletWhite = require('../assets/wallet-white.png');
const splashImage = require('../assets/wallet-graphic.png')
const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: theme.palette.BACKGROUND_GREEN,
        flexDirection: 'column',
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    splashImage: {
        position: 'absolute',
        marginTop: 150
    },
    formheader: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        marginBottom: 10
    },
    headerText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5
    },
    form: {
        backgroundColor: theme.palette.WHITE,
        marginTop:250,
        height: 320,
        width: '90%',
        marginHorizontal: 20,
        borderRadius: 24,
        paddingHorizontal: 30,
        position:'absolute'
    },
     loginbuttonstyle: {
         marginVertical:10,
         backgroundColor: theme.palette.BACKGROUND_GREEN, 
         borderWidth: 1,  
         borderRadius: 10,
     }
})

const LoginScreen = ({navigation}) => {

    const [passwordVisible, setPasswordVisible] = React.useState(false);
    console.log("Log In Screen");
    const handleLoginPress = () => {
        console.log("LOGIN");
    }

    const handleSignUpPress = () => {
        console.log("SIGN UP");
        navigation.dispatch(StackActions.replace('Sign Up'));
    }

    return(
            <KeyboardAvoidingView style={styles.container} behavior='position'>
                    <View style={styles.header}>
                        <Image source={walletWhite} />
                        <View>
                            <Typography text=" E-Wallet" textStyle={TextStyles.headerTextWhite} style={{}} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.form}>
                            <View style={styles.formheader}>
                                <Typography text={LOG_IN_SCREEN.title} textStyle={TextStyles.titleTextDarkGreen} />
                            </View>
                            <TextInput 
                                label={LOG_IN_SCREEN.phoneNumber}
                                mode={theme.textInput.outlined}
                                style={{marginBottom: 10,backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,height:50}}
                                theme= {textInputGreyBorder} 
                                underlineColorAndroid="transparent"
                                keyboardType={'numeric'}
                            />
                            <TextInput 
                                label={LOG_IN_SCREEN.password}
                                mode={theme.textInput.outlined}
                                style={{marginBottom: 5,backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND, height:50}}
                                theme={textInputGreyBorder}
                                keyboardType={'default'}
                                rightIcon={
                                    <PaperTextInput.Icon
                                    name={
                                        passwordVisible
                                        ? require('../assets/password-visible.png')
                                        : require('../assets/password-hide.png')
                                    }
                                    size={20}
                                    color={theme.palette.BACKGROUND_GREEN}
                                    onPress={() => setPasswordVisible(!passwordVisible)}
                                    />
                                }
                                secureTextEntry={!passwordVisible}
                            />
                            <Button 
                                variant= "outlined"
                                buttonStyle={styles.loginbuttonstyle}
                                label={LOG_IN_SCREEN.logIn}
                                color={theme.palette.WHITE}
                                labelStyle={ButtonStyles.splashButtonStyle}
                                handleOnPress={handleLoginPress}
                                style={{marginHorizontal:10}}
                                upperCase={false}                           
                            />
                            <Button 
                                variant= "text"
                                label={LOG_IN_SCREEN.signUpInstead}
                                color={theme.palette.BACKGROUND_GREEN}
                                handleOnPress={handleSignUpPress}
                                upperCase={false}
                                labelStyle={ButtonStyles.textButtonStyle}
                            />
                        </View>
                    </View>
                    <View style={styles.splashImage}>
                        <Image source={splashImage} />
                    </View>                
            </KeyboardAvoidingView>
    );
}


export default LoginScreen