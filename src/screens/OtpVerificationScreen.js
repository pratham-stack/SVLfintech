import React, {useState} from 'react';
import { View,Image, KeyboardAvoidingView,StyleSheet,Text, Dimensions} from "react-native";
import Typography from '../components/atoms/Typography';
import { TextStyles } from '../components/atoms/Typography';
import { OTP_VERIFICATION } from '../utils/string';
import Button, { ButtonStyles } from '../components/atoms/Button';
import theme from '../theme';
const Height = Dimensions.get('window').height;

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

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
    headerOTPText: {
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        backgroundColor: theme.palette.WHITE,
        marginTop: 0.35 * Height,
        height: 280,
        width: '90%',
        marginHorizontal: 20,
        borderRadius: 24,
        paddingHorizontal: 30,
        position:'absolute'
    },
    createAccountButton: {
        // height: 45,
    },
    createAccountButtonStyle: {
         backgroundColor: theme.palette.BACKGROUND_GREEN, 
         borderWidth: 1,  
         borderRadius: 10
    },
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20, flex: 1, justifyContent: 'space-evenly'},
    cell: {
        width: 45,
        height: 45,
        lineHeight: 45,
        fontSize: 28,
        borderWidth: 2,
        color: theme.palette.BACKGROUND_GREEN,
        borderColor: theme.palette.TEXT_INPUT_BACKGROUND,
        borderRadius: 12,
        marginHorizontal: 14,
        textAlign: 'center',
        backgroundColor: theme.palette.TEXT_INPUT_BACKGROUND
    },
    focusCell: {
        borderColor: theme.palette.BACKGROUND_GREEN,
    }
})

const walletWhite = require('../assets/wallet-white.png');
const splashImage = require('../assets/wallet-graphic.png')
const CELL_COUNT = 6;

const OtpVerificationScreen =  () => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const createAccount = () =>{
        console.log("Hello BOB");
        navigation.dispatch(StackActions.replace('Home'));
    }


    return(
        <KeyboardAvoidingView style={styles.container} behavior='position'>

                <View style={styles.header}>
                    <Image source={walletWhite} />
                    <View>
                        <Typography text=" E-Wallet" textStyle={TextStyles.headerTextWhite}/>
                    </View>
                </View>
                <View>
                <View style={styles.form}>
                    <View style={styles.formheader}>
                        <Typography text={OTP_VERIFICATION.title} textStyle={TextStyles.titleTextDarkGreen} />
                    </View>
                    <View style={styles.headerText}>
                            <Typography text="Enter the 6 digit otp send to your number." textStyle={TextStyles.headerTextDescGrey} />
                    </View>
                    <View style={styles.headerOTPText}>
                            <Typography text="(+91 879 149 6728)" textStyle={TextStyles.headerTextDescGrey} />
                    </View>
                    <View style={{height:90}}>
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                            )}
                        />
                    </View>
                    <View style={styles.createAccountButton}>    
                            <Button 
                                variant= "outlined"
                                buttonStyle={styles.createAccountButtonStyle}
                                label={OTP_VERIFICATION.createAccount}
                                color={theme.palette.WHITE}
                                labelStyle={ButtonStyles.splashButtonStyle}
                                handleOnPress={createAccount}
                                upperCase={false}
                            />
                    </View>
                </View>
                </View>
                <View style={styles.splashImage}>
                    <Image source={splashImage} />
                </View>                
                
        </KeyboardAvoidingView>
    );
}

export default OtpVerificationScreen