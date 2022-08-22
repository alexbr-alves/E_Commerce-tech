import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0001fc'
    },
    title:{
        color: '#ffffff',
        marginTop: 67,
        alignSelf: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 24, 
        lineHeight: 29,
    },
    cta: {
        position: 'absolute',
        marginTop: 245,
        alignSelf: 'center'
    },
    google: {
        position: 'absolute',
        marginTop: 330, 
        alignSelf: 'center'
    },
    facebook: {
        position: 'absolute',
        marginTop: 399, 
        alignSelf: 'center'
    },
    haveAccount:{
        position: 'absolute',
        marginTop: 512,
        alignSelf: 'center',
        fontFamily: 'Roboto_500Medium',
        fontSize: 18,
        lineHeight: 21,
        color: '#fbdf00'
    },
    points: {
        marginTop: 589,
        alignSelf: "center"
    },
    textSkip: {
        position: 'absolute',
        marginTop: 40,
        alignSelf: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#ffffff'
    }
})