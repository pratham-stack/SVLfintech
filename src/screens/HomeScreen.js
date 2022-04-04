import React from 'react';
import { View,Image,StyleSheet,SafeAreaView,TouchableOpacity, Text} from "react-native";
import theme from '../theme';
import { Avatar } from 'react-native-paper';
import Typography, { TextStyles } from '../components/atoms/Typography';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: theme.palette.HOME_BACKGROUND_GREY
    },
    header: {
        flex: 1.8,
        backgroundColor: theme.palette.BACKGROUND_GREEN,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    body: {
        flex: 4,
        backgroundColor: theme.palette.HOME_BACKGROUND_GREY,
        marginHorizontal: '5%'
    },
    footer: {
       flex: 1.8
    },
    avatarGreet: {
        fontSize: 16,
        color: theme.palette.WHITE,
        paddingLeft: 10
    },
    avatarName: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.palette.WHITE
    },
    cardText: {
        fontSize: 22,
        fontWeight: '700',
        color: theme.palette.WHITE
    },
    footerElement: {
        flex: 0.8,
        backgroundColor: theme.palette.WHITE,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderRadius: 24,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 12,
        color: theme.palette.DESCRIPTION_TEXT_GREY,
        fontWeight: '500',    
        paddingTop: 5,  
        textAlign: 'center'
    },
    walletBalanceText: {
        color: theme.palette.DESCRIPTION_TEXT_GREY,
        fontSize: 16,
        fontWeight: '700'
    },
    walletBalanceAmount: {
        color: theme.palette.WALLET_BALANCE_DARK_GREY,
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    walletBalanceCard: {
        backgroundColor: theme.palette.WHITE, 
        position: 'absolute', 
        height: '16%', 
        width:'90%', 
        marginHorizontal:20, 
        top:'12%', 
        borderRadius:24, 
        flexDirection: 'column', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        paddingVertical: 10
    },
    JMDimage: {
        height: 34, 
        width: 50, 
        resizeMode: 'contain',
    }
});

const Card = ({backImage, text, icon}) => {
    return(
        <View>
            <TouchableOpacity style={{flex: 1}}>
                <Image source={backImage} style={{height: '85%', width: 150, resizeMode: 'contain'}}/>
                <Image source={icon} style={{position: 'absolute',right: 20, top : 20, height: 50, width: 50, resizeMode: 'contain'}} />
                <Text style={{position: 'absolute', bottom: '25%', left:18, color: theme.palette.WHITE, fontSize: 22}}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const FooterCard = ({icon, text}) => {
    return(
        <View style={{flex: 1,flexDirection:'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Image source={icon} style={{height: 45, width: 45, resizeMode: 'contain'}}/>
            <TouchableOpacity activeOpacity={0.8}>
                <Typography text={text} textStyle={styles.footerText} />
            </TouchableOpacity>
        </View>
    );
}

const WalletBalanceCard = ({navigation}) => {
    return(
        <View style={styles.walletBalanceCard}>
            <Typography text="Your Wallet Balance" textStyle={styles.walletBalanceText} />
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/JMD-icon.png')} style={styles.JMDimage}/>
                <Typography text="16,120.00" textStyle={styles.walletBalanceAmount} />
            </View>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}  onPress={() => navigation.navigate("Wallet")}>
                <Text style={{color: theme.palette.BACKGROUND_GREEN}}>Go To Wallet</Text>
                <Image source={require('../assets/arrow-forward.png')} style={{height: 10, width: 10, resizeMode: 'contain', marginLeft: 10}}></Image>
            </TouchableOpacity>
        </View>
    );
}
const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}> 
                <View style={{flexDirection: 'row', margin:'5%'}}>
                    <Avatar.Image size={50} source={require('../assets/avatar.png')}  />
                    <View style={{flexDirection: 'row',alignItems: 'center',textAlign: 'center'}}>
                        <Typography text="Hi, " textStyle={styles.avatarGreet}/>
                        <Typography text="Pratham" textStyle={styles.avatarName}/>
                    </View>
                </View>
            </View>
            <View style={{flex:0.8}}></View>
            <View style={styles.body}> 
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Card backImage={require('../assets/orange-card.png')} text={'Mobile\nRecharge'} icon={require('../assets/mobile-recharge.png')}/>
                    <Card backImage={require('../assets/green-card.png')} text={'Bill\nPayment'} icon={require('../assets/bill-pay-card.png')}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around'}}>
                    <Card backImage={require('../assets/red-card.png')} text={'Transaction\nHistory'} icon={require('../assets/transaction-history.png')}/> 
                    <Card backImage={require('../assets/purple-card.png')} text={'My\nCards'} icon={require('../assets/my-cards.png')}/>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerElement}>
                    <FooterCard icon={require('../assets/send-money.png')} text={'Send\nMoney'}/>
                    <FooterCard icon={require('../assets/receive-money.png')} text={'Receive\nMoney'}/>
                    <FooterCard icon={require('../assets/mobile-recharge-circle.png')}  text={'Mobile\nRecharge'}/>
                    <FooterCard icon={require('../assets/bill-pay.png')}  text={'Bill\nPayment'}/>
                </View>
            </View>
            <WalletBalanceCard navigation={navigation}/>
        </SafeAreaView>
    );
}

export default HomeScreen;