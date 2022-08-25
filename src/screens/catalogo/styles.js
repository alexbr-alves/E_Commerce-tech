import { StyleSheet, Platform } from "react-native";


export default StyleSheet.create({
    container: {
        marginHorizontal: 11,
        backgroundColor: '#FDFEFF'
    },
    iconBack: {
        marginTop: Platform.OS === 'ios'? 20 : 60,
        marginLeft: 20
    },
    title: {
        marginLeft: 16,
        marginTop :24,
        fontFamily: "Roboto_700Bold",
        fontSize: 24,
        lineHeight: 29,
        color: '#0A1034'
    },
    
    filters: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 15
    },
    filters__price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: 16,
        height: 33,
        width: 151,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: '#A7A9BE'
    },
    filters__price__text: {
        marginLeft: 9,
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        lineHeight: 17,
        color: '#A7A9BE'
    },
    filters__price__icon2: {
        marginRight: 9
    },
    filters__filters: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filters__filters__text: {
        marginRight: 3,
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        lineHeight: 17,
        color: '#A7A9BE'
    },
    filters__grid: {
        alignSelf: 'center',
        marginRight: 52
    },
  
    card:{
        marginHorizontal: 5,
        marginTop: 5,
        height: 210,
        width: '47%',
    },
    image: {
        height: 90,
        width: 120,
        alignSelf: 'center',
        marginTop: 32
    },

    name: {
        marginLeft: 28,
        marginTop: 42,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        lineHeight: 19,
        color: "#0A1034"
    },
    price: {
        marginLeft: 28,
        fontFamily: 'Roboto_500Medium',
        fontSize: 12,
        lineHeight: 14,
        color: '#0001fc'
    },


    

})