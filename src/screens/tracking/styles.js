import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

    },
    validation: {
        height: '100%',
        width: '100%'
    },
    title: {
        marginLeft: 16,
        marginTop: 56,
        fontFamily: 'Roboto_900Black',
        fontSize: 32,
        lineHeight: 38
    },
    graph: {
        alignSelf: 'center',
        marginTop: 24,
    },
    graph__texts: {
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        marginHorizontal: 40,
        marginTop: 8,
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Roboto_400Regular'
    },
    graph__text1e2: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#0A1034'
    },
    graph__text3: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#A7A9BE'
    },
    tracking: {
        marginTop: 48,
        marginLeft: 40,
        fontSize: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#0A1034'
    },
    tracking__sigla: {
        alignSelf: 'center',
        marginRight: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#0A1034'
    },
    tracking__cod: {
        alignSelf: 'center',
        marginRight: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#0001FC',
    },
    date: {
        marginLeft: 32,
        marginTop: 24,
        fontSize: 'Roboto_900Black',
        fontSize: 25,
        lineHeight: 30,
        color: '#0A1034'
    },
    descriptions: {
        marginLeft: 32,
        marginTop: 4,
        fontSize: 'Roboto_700Bold',
        fontSize: 12,
        lineHeight: 14,
        color: '#A7A9BE'
    },
    report: {
        alignSelf: 'flex-end',
        marginRight: 40,
        marginTop: 48,
        ontSize: 'Roboto_700Bold',
        fontSize: 12,
        lineHeight: 14,
        color: '#2DB57D'
    }
})