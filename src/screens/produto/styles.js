import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#FDFEFF',
        height: '100%'
    },
    iconBack: {
        marginTop: 60,
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
    new: {
        backgroundColor: '#E0ECF8',
        width: 38,
        height: 25,
        marginLeft: 32,
        marginTop: 37,
        alignItems: "center",
        justifyContent: 'center'
    },
    new__text: {
        color: '#1F53E4',
        fontFamily: 'Roboto_500Medium',
        fontSize: 14, 
        lineHeight: 17
    },
    image: {
        width: 200,
        height: 160,
        marginTop: 100,
        alignSelf: 'center'
    },
    points: {
        alignSelf: 'center',
        marginTop: 23
    },




//////////////////////////////////////////////////// COLOR SPACE




    color__text: {
        fontFamily: "Roboto_700Bold",
        fontSize: 18,
        lineHeight: 21,
        marginLeft: 32,
        marginTop: 15,
        color: '#0A1034'
    },
    color__icons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    color__1: {
        backgroundColor: '#52514F',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8,
    },
    color__2: {
        backgroundColor: '#ffffff',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8,
        borderWidth: 1
    },
    color__3: {
        backgroundColor: '#b22222',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8,
        borderWidth: 1
    },
    color__4: {
        backgroundColor: '#191970',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8
    },


    ///      ACTIVE COLOR SPACE

    color__1__active: {
        backgroundColor: '#52514F',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8,
        borderWidth: 2,
        borderColor: 'red'
    },
    color__2__active: {
        backgroundColor: '#ffffff',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8,
        borderWidth: 2,
        borderColor: 'red'
    },
    color__3__active: {
        backgroundColor: '#b22222',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8,
        borderWidth: 2,
        borderColor: 'red'
    },
    color__4__active: {
        backgroundColor: '#191970',
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8,
        borderWidth: 2,
        borderColor: 'red'
    },


    /////////////////////////// CAPACITY SPACE



    capacity__title: {
        fontFamily: "Roboto_700Bold",
        fontSize: 18,
        lineHeight: 21,
        marginLeft: 32,
        marginTop: 32,
        color: '#0A1034'
    },
    capacity__space: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    capacity__text: {
        marginHorizontal: 12,
        marginTop: 16,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#A7A9BE'
    },
    capacity__text__active: {
        marginHorizontal: 12,
        marginTop: 16,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#0001fc'
    },


    /////////////////////////////// BUTTOM CART SPACE
    
    cart: {
        marginHorizontal: 16,
        backgroundColor: '#1F53E4',
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 32
    },
    cart__text: {
        color: '#FFFFFF',
        fontFamily: "Roboto_700Bold",
        fontSize: 18,
        lineHeight: 21
    },

    /////////////////////////////MODAL SPACE

    image__modal: {
        position: 'absolute',
        width: 10000
    },
    modal__cart: {
        marginTop: 200,
        alignSelf: 'center'
    },
    modal__buttom: {
        marginHorizontal: 16,
        backgroundColor: '#1F53E4',
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    modal__buttom__text: {
        color: '#FFFFFF',
        fontFamily: "Roboto_700Bold",
        fontSize: 18,
        lineHeight: 21
    },
    modal__buttom2: {
        marginHorizontal: 16,
        backgroundColor: '#1F53E4',
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 20
    }
})


