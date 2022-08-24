import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#0001fc'
    },
    buttom: {
        marginHorizontal: 32,
        backgroundColor: '#ffffff',
        height: 52,
        marginTop: 566,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 4
    },
    buttomText: {
      fontFamily: 'Roboto_700Bold',
      fontSize: 18,
      lineHeight: 21,
      color: '#0001fc'
    },
    text:{
        marginTop: 73,
        alignSelf: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 18, 
        lineHeight: 21,
        color: '#ffffff'
    }
})