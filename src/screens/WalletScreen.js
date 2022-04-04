import React from 'react';
import { View,Image,StyleSheet,SafeAreaView,Text, Dimensions,TouchableOpacity,ScrollView } from "react-native";
import Button,{ ButtonStyles } from '../components/atoms/Button';
import Typography, { TextStyles } from '../components/atoms/Typography';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.palette.HOME_BACKGROUND_GREY, 
        flexDirection: 'column'
    },
    goBackText: {
        color: theme.palette.BACKGROUND_GREEN,
        fontSize: 14,
        marginLeft: 10
    },
    walletTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.palette.HEADER_TEXT_DARK_GREEN
    },
    walletBalanceTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: theme.palette.WALLET_BALANCE_DARK_GREY
    },
    amountStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.palette.BACKGROUND_GREEN
    },
    sendToBankStyle: {
        fontSize: 14,
        color: theme.palette.HEADER_TEXT_DARK_GREEN,
        fontWeight: '400',
    },
    addMoneyButton: {
        width: '100%'
    },
    addMoneyButtonStyle: {
        backgroundColor: theme.palette.WHITE, 
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.palette.BACKGROUND_GREEN
    },
    addMoneyLabelStyle: {
        fontSize:18,
        fontWeight: '500',
        paddingVertical: 3
    },
    primaryTextStyle :{
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.palette.HEADER_TEXT_DARK_GREEN,
    },
    secondaryTextStyle: {
        fontSize: 13,
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    transactionAmount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'purple',
        alignContent: 'flex-end'
    }
});

const PrimaryCard= () => {

    return(
        <View style={{flex: 2.5}}>
            <View style={{flex:2.9, backgroundColor: theme.palette.WHITE, marginHorizontal: 20, borderRadius: 24, flexDirection: 'column', justifyContent: 'space-evenly', paddingHorizontal: 20}}>
                <View style={{alignItems: 'center'}}>
                    <Typography text='Wallet' textStyle={styles.walletTitle}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-evenly'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', width: '70%'}}>
                        <Image source={require('../assets/wallet-green.png')} style={{height: 50, width: 50, resizeMode: 'contain', marginRight:'3%'}}/>
                        <View style={{flexDirection: 'column'}}>
                            <Typography text='Wallet Balance' textStyle={styles.walletBalanceTitle}/>
                            <Typography text='J$ 12,32653' textStyle={styles.amountStyle}/>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Typography text='Send to Bank' textStyle={styles.sendToBankStyle}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.addMoneyButton}>    
                    <Button 
                        variant= "outlined"
                        buttonStyle={styles.addMoneyButtonStyle}
                        label='Add Money to Wallet'
                        color={theme.palette.BACKGROUND_GREEN}
                        labelStyle={styles.addMoneyLabelStyle}
                        // handleOnPress={handleSignUpPress}
                        upperCase={false}
                    />
                </View>  
            </View>
        </View>
    );

}

const SecondaryCard = () => {

    return(
        <View style={{flex: 3}}>
            <View style={{flex:2.9, backgroundColor: theme.palette.WHITE, marginHorizontal: 20, marginVertical: 10, borderRadius: 24, flexDirection: 'column', paddingVertical: 20, paddingHorizontal: 15, justifyContent: 'space-around'}}>
                <SecondaryCardList card={require('../assets/electricity-orange.png')} primaryText='Passbook' secondaryText='Check your account balance.'/>
                <SecondaryCardList card={require('../assets/electricity-orange.png')} primaryText='Set Payment Reminder' secondaryText='Never miss a payment with payment reminder.'/>
                <SecondaryCardList card={require('../assets/electricity-orange.png')} primaryText='Automatic Add Money' secondaryText='Check your account balance.'/>
            </View>
        </View>
    );
}
const SecondaryCardList = ({card, primaryText, secondaryText}) => {
    return(
        <View style={{flexDirection: 'row'}}>
            <Image source={card} style={{height:50, width: 50, resizeMode: 'contain'}}/>
            <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Typography text={primaryText} textStyle={styles.primaryTextStyle}/>
                <Typography text={secondaryText} textStyle={styles.secondaryTextStyle}/>
            </View>
        </View>
    );
}

const TransactionHistoryCard = () => {
    return (
        <View style={{flex: 3}}>
             <View style={{flex:2.9, backgroundColor: theme.palette.WHITE, marginHorizontal: 20, marginBottom: 10, borderRadius: 24, flexDirection: 'column', paddingVertical: 12, paddingHorizontal: 15}}>
                <View style={{alignItems: 'center'}}>
                    <Typography text='Transaction History' textStyle={styles.walletTitle}/>
                </View>
                <ScrollView style={{marginTop: 5, width: '100%', flex:1}}>
                    <TransactionHistoryCardItem card={require('../assets/electricity-orange.png')}/>
                    <TransactionHistoryCardItem card={require('../assets/electricity-orange.png')}/>
                    <TransactionHistoryCardItem card={require('../assets/electricity-orange.png')}/>
                    <TransactionHistoryCardItem card={require('../assets/electricity-orange.png')}/>
                    <TransactionHistoryCardItem card={require('../assets/electricity-orange.png')}/>
                </ScrollView>
            </View>
            <TouchableOpacity  style={{position: 'absolute', right: '10%', top: '5%'}}>
                <Image source={require('../assets/filter.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const TransactionHistoryCardItem = ({card}) => {
    return (
        <View style={{flexDirection: 'row',marginBottom: 10, alignItems: 'center'}}>
            <Image source={card} style={{height:50, width: 50, resizeMode: 'contain'}}/>
            <View style={{flexDirection: 'column', marginLeft: 10, width: '60%'}}>
                <Typography text="Electricity Bill Payment" textStyle={styles.primaryTextStyle}/>
                <Typography text="Feb 07 at 09:20 am" textStyle={styles.secondaryTextStyle}/>
            </View>
            <Typography text="J$ 500.00" textStyle={styles.transactionAmount}/>
        </View>
    );
}




const WalletScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
           <TouchableOpacity style={{flex: 0.5,flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
               <Image source={require('../assets/go-back.png')} style={{height:60, width:60, resizeMode:'contain'}} />
           </TouchableOpacity>
           <PrimaryCard />
           <SecondaryCard />
           <TransactionHistoryCard />
        </SafeAreaView>
    );
}

export default WalletScreen;