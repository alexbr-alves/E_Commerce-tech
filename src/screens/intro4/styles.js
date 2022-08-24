import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    text:{
        marginTop: Platform.OS === 'android'? 690 : 780,
        alignSelf: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 18, 
        lineHeight: 21,
        color: '#ffffff'
    }
})