import React from 'react';
import { View,Image,StyleSheet,SafeAreaView,Text } from "react-native";
import theme from '../theme';
import Typography from '../components/atoms/Typography';
import { TextStyles } from '../components/atoms/Typography';
import { Button } from 'react-native-paper';

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
       marginTop: 30,
    },
    signUpbutton: {
        marginTop: 20,
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
const handleLoginPress = () => {
    console.log("LOGIN");
}

const handleSignUpPress = () => {
    console.log("SIGN UP");
}

const SplashScreen = ({navigation}) => {
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
                            <Typography text="Welcome To E-Wallet" textStyle={TextStyles.titleTextDarkGreen} />
                        </View>
                        <View style={styles.headerText}>
                            <Typography text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." textStyle={TextStyles.descTextGrey} />
                        </View>
                        <View style={styles.loginbutton}>
                            <Button mode="contained" style={{backgroundColor: theme.palette.BACKGROUND_GREEN, height: 45, borderRadius: 10}}
                                onPress = {handleLoginPress}
                                ><Text style={{alignItems:'center'}}>Log In</Text>
                            </Button>
                        </View>
                        <View style={styles.signUpbutton}>    
                            <Button mode="contained" style={{backgroundColor: theme.palette.WHITE, borderWidth: 1, borderColor: theme.palette.BACKGROUND_GREEN,height: 45, borderRadius: 10}}
                                onPress = {handleSignUpPress}
                                ><Text style={{alignItems:'center', color: '#1C843B'}}>Sign Up</Text>
                            </Button>
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