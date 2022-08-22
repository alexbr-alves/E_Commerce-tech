import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import fundo from '../../../assets/images/intro3.jpg'


export default function Intro3(){
    const navigation = useNavigation();
    return(
        <ImageBackground source={fundo} resizeMode={'cover'} style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate('Intro4')}} >
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}