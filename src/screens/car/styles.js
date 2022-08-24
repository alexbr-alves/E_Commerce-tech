import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        //backgroundColor: '#FDFEFF',

    },
    title: {
        marginTop: 56,
        marginLeft: 16,
        fontFamily: 'Roboto_900Black',
        fontSize: 32,
        lineHeight: 38, 
    },
    areaProduto: {
        width: 224,
        //height: 324,
        marginTop: 16,
        marginLeft: 20,
        backgroundColor: '#ffffff',
        borderRadius: 5

    },
    areaNew: {
        width: 34,
        height: 22,
        backgroundColor: "#E0ECF8",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28,
        borderRadius: 4,
        marginLeft: 12
    },
    new: {
        color: '#1F53E4',
        fontSize: 12,
        lineHeight: 14,
        fontFamily: "Roboto_500Medium",

    },
    image: {
        width: 200,
        height: 160,
        marginTop: 43,
        alignSelf: 'center'
    },
    name: {
        marginLeft: 16,
         marginTop: 36,
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#0A1034'
    },
    price: {
        marginLeft: 20,
         marginTop: 4,
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        lineHeight: 17,
        color: '#0001fc'
    }
})