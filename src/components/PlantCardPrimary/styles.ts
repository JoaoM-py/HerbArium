import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.white,
        fontFamily: fonts.heading,
        marginVertical: 16
    }
})