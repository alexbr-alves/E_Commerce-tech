import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor:  '#fdfeff'
    },
    title: {
        marginTop: 16,
        marginLeft: 16,
        color: '#0A1034',
        fontFamily: 'Roboto_900Black',
        fontSize: 32,
        lineHeight: 38,
    },
    destaques: {
        height: 190
    },
    destaques__card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0001fc',
        marginHorizontal: 8,
        height: 110,
        width: 370,
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 24
    },
    destaques__image: {
        width: 60,
        height: 80,
        marginRight: 40

    },
    destaques__name: {
       marginLeft: 24,
       fontFamily: 'Roboto_700Bold',
       fontSize: 18,
       lineHeight: 21,
       color: '#ffffff'
    },
    destaques__price: {
        marginLeft: 24,
        fontFamily: 'Roboto_500Medium',
        fontSize: 12,
        lineHeight: 14,
        color: '#e0ecf8',
        marginTop: 10

    },
    spaceIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    spaceIcons__uni: {
        marginHorizontal: 16,
        alignItems: "center"
    },
    spaceIcons__icon: {
        backgroundColor: '#E0ECF8',
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    spaceIcons__text: {
        textAlign: 'center',
        marginTop: 8,
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        lineHeight: 17,
        color: '#1F53E4'
    },
    sales: {
        marginHorizontal: 7
    },
    sales__title: {
        marginTop: 40,
        textAlign: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 24,
        lineHeight: 29,
        color: '#0A1034'
    },
    sales__row: {
        flexDirection: 'row',
    },
    sales__produtos: {
        width: '45%',
        height: 251,
        marginHorizontal: 10,
        backgroundColor: '#FFFFFF'
    },
    sales__desconto :{
        width: 39,
        height: 22,
        backgroundColor: '#E0ECF8',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 16, 
        marginLeft: 16
    },
    sales__descontoValor: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 12,
        lineHeight: 14,
        color: '#1F53E4'
    },
    sales__image: {
        alignSelf: 'center',
        marginTop: 23,
        height: 130,
        width: 100
    },
    sales__titleProduto:{
        alignSelf: 'center',
        marginTop: 22,
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#0A1034'
    }
})