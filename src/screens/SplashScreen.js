import React from 'react';
import { View,Image,StyleSheet,SafeAreaView,Text } from "react-native";
import theme from '../theme';
import Typography from '../components/atoms/Typography';
import { TextStyles } from '../components/atoms/Typography';
import Button, { ButtonStyles } from '../components/atoms/Button';
import { SPLASH_SCREEN } from '../utils/string';

const walletWhite = require('../assets/wallet-white.png');
const splashImage = require('../assets/wallet-graphic.png')
const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: theme.palette.BACKGROUND_GREEN,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    splashImage: {
        position: 'absolute',
        marginTop: 161
    },
    formheader: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50
    },
    headerText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5
    },
    loginbutton: {
       marginTop: 20,
    //    height: 45,
    },
    loginbuttonstyle: {
        backgroundColor: theme.palette.BACKGROUND_GREEN, 
        borderWidth: 1,  
        borderRadius: 10
    },
    signUpbutton: {
        marginTop: 20,
    },
    signupbuttonstyle: {
        backgroundColor: theme.palette.WHITE, 
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.palette.BACKGROUND_GREEN
    },
    form: {
        backgroundColor: theme.palette.WHITE,
        marginBottom: 60,
        height: 300,
        marginHorizontal: 20,
        borderRadius: 24,
        paddingHorizontal: 30
    }
})

const SplashScreen = ({navigation}) => {

    const handleLoginPress = () => {
        console.log("LOGIN");
        navigation.push('Log In');
    }

    const handleSignUpPress = () => {
        console.log("SIGN UP");
        navigation.push('Sign Up');
    }
    
    console.log("Splash Screen");
    return(
        <SafeAreaView>
            <View style={styles.container}>
    
                <View style={styles.header}>
                    <Image source={walletWhite} />
                    <View>
                        <Typography text=" E-Wallet" textStyle={TextStyles.headerTextWhite} style={{}} />
                    </View>
                </View>

                <View>
                    <View style={styles.form}>
                        <View style={styles.formheader}>
                            <Typography text={SPLASH_SCREEN.title} textStyle={TextStyles.titleTextDarkGreen} />
                        </View>
                        <View style={styles.headerText}>
                            <Typography text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." textStyle={TextStyles.descTextGrey} />
                        </View>
                        <View style={styles.loginbutton}>    
                            <Button 
                                variant= "outlined"
                                buttonStyle={styles.loginbuttonstyle}
                                label={SPLASH_SCREEN.logIn}
                                color={theme.palette.WHITE}
                                labelStyle={ButtonStyles.splashButtonStyle}
                                handleOnPress={handleLoginPress}
                                upperCase={false}
                            />
                        </View>
                        <View style={styles.signUpbutton}>    
                            <Button 
                                variant= "outlined"
                                buttonStyle={styles.signupbuttonstyle}
                                label={SPLASH_SCREEN.signUp}
                                color={theme.palette.BACKGROUND_GREEN}
                                labelStyle={ButtonStyles.splashButtonStyle}
                                handleOnPress={handleSignUpPress}
                                upperCase={false}
                            />
                        </View>    
                    </View>
                </View>
                <View style={styles.splashImage}>
                    <Image source={splashImage} />
                </View>
            </View>
        </SafeAreaView>
    );
}


export default SplashScreen