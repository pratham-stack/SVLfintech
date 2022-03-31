import React from 'react';
import { View,Image,StyleSheet,SafeAreaView,Text, Dimensions } from "react-native";
import theme from '../theme';
import Typography from '../components/atoms/Typography';
import { TextStyles } from '../components/atoms/Typography';
import Button, { ButtonStyles } from '../components/atoms/Button';
import { SPLASH_SCREEN } from '../utils/string';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


const walletWhite = require('../assets/wallet-white.png');
const splashImage = require('../assets/wallet-graphic.png')
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.palette.BACKGROUND_GREEN ,
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection:'row', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    formheader: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 50,
    },
    headerText: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 5
    },
    loginbutton: {
       marginTop: 20,
    },
    loginbuttonstyle: {
        backgroundColor: theme.palette.BACKGROUND_GREEN, 
        borderWidth: 1,  
        borderRadius: 10
    },
    signUpbutton: {
        marginVertical: 20
    },
    signupbuttonstyle: {
        backgroundColor: theme.palette.WHITE, 
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.palette.BACKGROUND_GREEN
    },
    form: {
        backgroundColor: theme.palette.WHITE,
        height: 0.4 * Height,
        marginHorizontal: 20,
        borderRadius: 24,
        paddingHorizontal: 30,
        justifyContent: 'space-evenly',
        elevation: 0
    },
    splashImage: {
        position: 'absolute',
        top: 100
    },
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
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
            <View style={styles.container}>
    
                <View style={styles.header}>
                    <Image source={walletWhite} />
                    <View>
                        <Typography text=" E-Wallet" textStyle={TextStyles.headerTextWhite} />
                    </View>
                </View>

                <View style={{flex: 3, justifyContent: 'flex-end', marginBottom: "20%" }}>
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
                {/* <View style={styles.splashImage}>
                    <Image source={splashImage}/>
                </View> */}
            </View>
        </SafeAreaView>
    );
}


export default SplashScreen