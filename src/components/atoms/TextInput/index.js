import * as React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import theme from '../../../theme';

const TextInput = ({label,mode,style,rightIcon,theme,...restProps}) => {
    return (
        <View>
            <PaperTextInput 
                label={<Text style={styles.labelStyle}>{label}</Text>}
                mode={mode}
                style={style}
                right={rightIcon}
                theme={theme}
                {...restProps}
            />
        </View>
    );
}

export default TextInput;

const styles = StyleSheet.create({
    labelStyle: {
        fontWeight: '600'
    }
});