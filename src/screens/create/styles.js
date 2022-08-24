
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#0001fc',
        height: '100%'
    },
    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 24,
        lineHeight: 29,
        alignSelf: 'center',
        color: '#ffffff',
        marginTop: 67,
    },
    name: {
        marginHorizontal: 48,
        marginTop: 127
    },
    name__text: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#ffffff'
    },
    name__input: {
        borderWidth: 1,
        borderColor: '#ffffff',
        marginTop: 8,
        paddingLeft: 10,
        fontFamily: 'Roboto_400Regular',
        height: 35
    },


    email: {
        marginHorizontal: 48,
        marginTop: 24
    },
    email__text: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#ffffff'
    },
    email__input: {
        borderWidth: 1,
        borderColor: '#ffffff',
        marginTop: 8,
        paddingLeft: 10,
        fontFamily: 'Roboto_400Regular',
        height: 35
    },


    password: {
        marginHorizontal: 48,
        marginTop: 24
    },
    password__text: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#ffffff'
    },
    password__input: {
        borderWidth: 1,
        borderColor: '#ffffff',
        marginTop: 8,
        paddingLeft: 10,
        fontFamily: 'Roboto_400Regular',
        height: 35
    },
    validate: {
        marginTop: 32,
        height: 53,
        alignItems: 'center',
        marginHorizontal: 32,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 4
    },
    validate__text: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#0001fc'
    },
    haveAccount:{
        marginTop: 40,
        alignSelf: 'center',
        fontFamily: 'Roboto_500Medium',
        fontSize: 18,
        lineHeight: 21,
        color: '#fbdf00'
    },
    points: {
        marginTop: 56,
        alignSelf: "center"
    },
    textSkip: {

        marginTop: 40,
        alignSelf: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#ffffff'
    }
    
})