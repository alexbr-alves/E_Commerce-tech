import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import fundo from '../../../assets/images/intro4.jpg'


export default function Intro4(){
    const navigation = useNavigation();
    return(
        <ImageBackground source={fundo} resizeMode={'cover'} style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate('Connexion')}}> 
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}