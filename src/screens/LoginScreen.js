import React from 'react';
import { View,Image,StyleSheet,SafeAreaView,Text } from "react-native";
import theme, {textInputWhiteBorder} from '../theme';
import Typography from '../components/atoms/Typography';
import { TextStyles } from '../components/atoms/Typography';
import { TextInput } from 'react-native-paper';

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
        position: 'relative',
        marginTop: 170
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
        paddingHorizontal: 30,
        // position: 'relative'
    }
})
const handleLoginPress = () => {
    console.log("LOGIN");
}

const handleSignUpPress = () => {
    console.log("SIGN UP");
}

const LoginScreen = ({navigation}) => {
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
                <View style={styles.splashImage}>
                    <Image source={splashImage} />
                </View>
                    <View style={styles.form}>
                        <View style={styles.formheader}>
                            <Typography text="Log In" textStyle={TextStyles.titleTextDarkGreen} />
                        </View>
                        <TextInput 
                            label= "Username"
                            mode = "outlined"
                            style={{ marginBottom: 10, borderRadius:25}}
                            // right={
                            //     <TextInput.Icon
                            //     name={require('../assets/phone-country.png')}
                            //     size={26}
                            //     />
                            // }
                            keyboardType={'default'}
                            important={true}
                            theme={textInputWhiteBorder}
                            // text={username}
                            // onChangeText={setUsername}
                        />
                        <TextInput
                            label="Password"
                            mode="flat"
                            theme={textInputWhiteBorder}
                            style={{marginBottom: 10}}
                            // right={
                            //     <TextInput.Icon
                            //     name={
                            //         passwordVisible
                            //         ? require('../assets/password_visible.png')
                            //         : require('../assets/password_hide.png')
                            //     }
                            //     color="#fff"
                            //     onPress={() => setPasswordVisible(!passwordVisible)}
                            //     />
                            // }
                            // secureTextEntry={!passwordVisible}
                            // text={password}
                            // error={!passwordError.isValid}
                            // errorMessage={passwordError.errorMessage}
                            // onChangeText={setPassword}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default LoginScreen