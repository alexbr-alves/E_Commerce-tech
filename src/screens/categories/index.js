import React, {useEffect} from "react";
import { View, Text, Image, TouchableOpacity, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

import iconBack from '../../../assets/images/iconBack.png'
export default function Categories({navigation: {goBack}}) {
    const navigation = useNavigation()

   
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goBack()}>
            <Image style={styles.iconBack} source={iconBack} />
            </TouchableOpacity>
            <Text style={styles.title}>Categories</Text>
            <TouchableOpacity style={styles.itens} onPress={() => Alert.alert('Somente Computers e Smartphone por enquanto')}>
                <Text style={styles.itens__text} >All</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itens} onPress={() => [
                navigation.navigate('Catalogo', {categoria: 'Laptop'})
            ]} >
                <Text style={styles.itens__text} >Computers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itens} onPress={() => Alert.alert('Somente Computers e Smartphone por enquanto')}>
                <Text style={styles.itens__text} >Accessories</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itens}  onPress={() => [
                navigation.navigate('Catalogo', {categoria: 'Smartphone'})
            ]}>
                <Text style={styles.itens__text} >Smartphones</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itens}  onPress={() => Alert.alert('Somente Computers e Smartphone por enquanto')}>
                <Text style={styles.itens__text} >Smart objects</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itens}  onPress={() => Alert.alert('Somente Computers e Smartphone por enquanto')}>
                <Text style={styles.itens__text} >Speakers</Text>
            </TouchableOpacity>            
        </View>
    )
}