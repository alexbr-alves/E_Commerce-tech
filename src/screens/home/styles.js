import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor:  '#fdfeff'
    },
    title: {
        marginTop: 56,
        marginLeft: 16,
        color: '#0A1034',
        fontFamily: 'Roboto_900Black',
        fontSize: 32,
        lineHeight: 38,
    },
    destaques__card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0001fc',
        marginHorizontal: 8,
        height: 110,
        width: 370,
        alignItems: 'center',
        borderRadius: 6
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
    points: {
        marginTop: 12,
        alignSelf: 'center'
    }
})