import * as React from 'react';
import { StyleSheet, Text as ReactNativeText } from 'react-native';
import theme from '../../../theme';

const Typography = ({ text, textStyle, ...restProps}) => {
    return (
        <ReactNativeText
            style={textStyle} {...restProps}>{text}
        </ReactNativeText>
    );
};
export default Typography;

export const TextStyles = StyleSheet.create({
    headerTextWhite: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.WHITE
    },
    titleTextDarkGreen: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.HEADER_TEXT_DARK_GREEN
    },
    descTextGrey: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    headerTextDescGrey: {
        fontSize: 14,
        fontWeight: '700',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    },
    otpNumberGrey: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.palette.DESCRIPTION_TEXT_GREY
    }
});