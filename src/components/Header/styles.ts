import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';




export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,  
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.white,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.white,
        lineHeight: 40
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000',
        borderRadius:12,
        margin:20,
        height:50,
        flexDirection:'row'
        
    }
});