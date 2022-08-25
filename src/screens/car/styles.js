import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
       //paddingBottom: 150
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
        height: 324,
        marginTop: 16,
        marginLeft: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,

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
        width: 130,
        height: 130,
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
        marginLeft: 16,
         marginTop: 4,
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        lineHeight: 17,
        color: '#0001fc'
    },
    cores: {
        marginLeft: 16,
        fontFamily: 'Roboto_400Regular',
        fontSize: 10,
        lineHeight: 12,
        color: '#a7a9be'
    },
    descripts: {
        marginTop: 40,
        backgroundColor: "#FFFFFF",
        paddingTop: 10
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: 24,   
        height: 61,
        justifyContent: 'space-between',
        marginVertical: 5
    },
    text1: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 18, lineHeight: 21,
        color: '#0A1034',
        textAlign: "left"
    },
    text2: {
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
        lineHeight: 19,
        color: '#0001fc',
        justifyContent: 'center',
        textAlign: 'right'
    },
    text3: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'right',
        color: '#A7A9BE'
    },
    textGreen: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'right',
        color: '#2DB57D'
    },
    buttom: {
        marginTop: 32,
        height: 53,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0135EB',
        borderRadius: 6,
    },

    buttom__text: {
        color: '#ffffff',
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
   },
    modal: {
        height: '100%',
        width: '100%'
   },
    
})