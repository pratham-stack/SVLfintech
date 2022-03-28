import React, {useState} from 'react';
import { View,Image,StyleSheet,SafeAreaView,Text, KeyboardAvoidingView,ScrollView} from "react-native";
import Typography from '../components/atoms/Typography';
import { TextStyles } from '../components/atoms/Typography';
import theme, {textInputGreyBorder}  from '../theme';
import { SIGN_UP_SCREEN } from '../utils/string';
import {TextInput as PaperTextInput} from 'react-native-paper';
import TextInput from '../components/atoms/TextInput';
import Button, { ButtonStyles } from '../components/atoms/Button';
import DatePicker from 'react-native-date-picker'
import { StackActions } from '@react-navigation/native';

const walletWhite = require('../assets/wallet-white.png');
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.palette.BACKGROUND_GREEN,
        height: "100%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    form: {
        backgroundColor: theme.palette.WHITE,
        width: '90%',
        marginHorizontal: 20,
        borderRadius: 24,
        paddingHorizontal: 30,
        marginVertical: 50,
        // backgroundColor:'blue',
    },
    formheader: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        marginBottom: 5
    },
    headerText: {
        justifyContent: "center",
        alignItems: "center",
    },
    formField: {
        marginVertical:10
    },
    continueButtonstyle: {
        backgroundColor: theme.palette.BACKGROUND_GREEN, 
        borderWidth: 1,  
        borderRadius: 10,
    }
});

const SignUpScreen =  ({navigation}) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);

    const handleLogInPress = () => {
        console.log("SIGN UP");
        navigation.dispatch(StackActions.replace('Log In'));
    }
    const handleContinuePress = () => {
        console.log("SIGN UP");
        navigation.dispatch(StackActions.replace('OTP Verification'));
    }
    

    return(
        <KeyboardAvoidingView>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={walletWhite} />
                    <View>
                        <Typography text=" E-Wallet" textStyle={TextStyles.headerTextWhite} />
                    </View>
                </View>
                <ScrollView style={styles.form}>
                    <View style={styles.formheader}>
                        <Typography text={SIGN_UP_SCREEN.title} textStyle={TextStyles.titleTextDarkGreen} />
                    </View>
                    <View style={styles.headerText}>
                        <Typography text={SIGN_UP_SCREEN.desc} textStyle={TextStyles.headerTextDescGrey} />
                    </View>
                    <View style={styles.formField}>
                        <TextInput 
                            label={SIGN_UP_SCREEN.fullName}
                            mode={theme.textInput.outlined}
                            style={{marginBottom: 10,backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,height:50}}
                            theme= {textInputGreyBorder} 
                            underlineColorAndroid="transparent"
                            keyboardType={'default'}
                        />
                        <TextInput 
                            label={SIGN_UP_SCREEN.phoneNumber}
                            mode={theme.textInput.outlined}
                            style={{marginBottom: 10,backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,height:50}}
                            theme= {textInputGreyBorder} 
                            underlineColorAndroid="transparent"
                            keyboardType={'numeric'}
                        />
                        <TextInput 
                            label={SIGN_UP_SCREEN.dateOfBirth}
                            mode={theme.textInput.outlined}
                            style={{marginBottom: 10,backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND,height:50}}
                            theme= {textInputGreyBorder} 
                            underlineColorAndroid="transparent"
                            keyboardType={'numeric'}
                            rightIcon={
                                <PaperTextInput.Icon
                                    name={require('../assets/calendar.png')}
                                    color={theme.palette.BACKGROUND_GREEN}
                                    onPress={() => setOpen(true)}
                                    size={20}
                                />
                            }
                            editable={false}
                            // value={date}
                        />
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode='date'
                            onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                            console.log(date);
                            }}
                            onCancel={() => {
                            setOpen(false)
                            }}
                        />
                        <TextInput 
                            label={SIGN_UP_SCREEN.password}
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
                                color={theme.palette.BACKGROUND_GREEN}
                                size={20}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                                />
                            }
                            secureTextEntry={!passwordVisible}
                        />
                        <TextInput 
                            label={SIGN_UP_SCREEN.confirmPassword}
                            mode={theme.textInput.outlined}
                            style={{marginBottom: 5,backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND, height:50}}
                            theme={textInputGreyBorder}
                            keyboardType={'default'}
                            rightIcon={
                                <PaperTextInput.Icon
                                name={
                                    confirmPasswordVisible
                                    ? require('../assets/password-visible.png')
                                    : require('../assets/password-hide.png')
                                }
                                color={theme.palette.BACKGROUND_GREEN}
                                size={20}
                                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                />
                            }
                            secureTextEntry={!confirmPasswordVisible}
                        />
                    </View>
                    <View>
                        <Button 
                            variant= "outlined"
                            buttonStyle={styles.continueButtonstyle}
                            label={SIGN_UP_SCREEN.continue}
                            color={theme.palette.WHITE}
                            labelStyle={ButtonStyles.splashButtonStyle}
                            handleOnPress={handleContinuePress}
                            style={{marginHorizontal:10}}
                            upperCase={false}                           
                        />
                    </View>
                    <View style={{marginVertical: 5}}>
                        <Button 
                            variant= "text"
                            label={SIGN_UP_SCREEN.logInInstead}
                            color={theme.palette.BACKGROUND_GREEN}
                            handleOnPress={handleLogInPress}
                            upperCase={false}
                        />
                    </View>
                </ScrollView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignUpScreen