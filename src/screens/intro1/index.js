import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
import fundo from '../../../assets/images/intro1.jpg'


export default function Intro1(){
    const navigation = useNavigation();
    return(
        <ImageBackground source={fundo} resizeMode={'cover'} style={styles.container}>
            <TouchableOpacity style={styles.buttom} onPress={() => {navigation.navigate('Intro2')}}>
                <Text style={styles.buttomText}>Let's start</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Connexion')}}>
            <Text style={styles.text}>Skip for now</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}