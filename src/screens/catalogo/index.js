import React, { useState, useEffect, useContext } from "react";
import { View, Image, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from './styles';

import iconBack from '../../../assets/images/iconBack.png'
import iconChange from '../../../assets/images/iconChange.png'
import iconBox from '../../../assets/images/iconBox.png'
import iconVector from '../../../assets/images/iconVector.png'

import computers from '../../mocks/computers';
import smartphones from '../../mocks/smartphone'
import { CarrinhoContext } from "../../contexts/CarrinhoContext";

export default function Catalogo({navigation: {goBack}}) {
    const route = useRoute();
    const [produtos, setProdutos] = useState([]);
    const navigation = useNavigation();
    const {viuProduto} = useContext(CarrinhoContext);

    if(route.params.categoria === 'Laptop'){
        useEffect(() => {
            setProdutos(computers)
    })}
    else if (route.params.categoria === 'Smartphone'){
        useEffect(() => {
            setProdutos(smartphones)
    })}

    

    return(
       <SafeAreaView style={styles.container}> 
             <TouchableOpacity onPress={() => goBack()}>
                <Image style={styles.iconBack} source={iconBack} />
            </TouchableOpacity>
       <Text style={styles.title}>{route.params.categoria}</Text>
       <View style={styles.filters}>
            <View style={styles.filters__price}>
                <Text style={styles.filters__price__text}>Ascending price</Text>
                <Image source={iconVector}/>
                <Image style={styles.filters__price__icon2} source={iconChange}/>
            </View>
            <View style={styles.filters__filters}>
                <Text style={styles.filters__filters__text} >Filters</Text>
                <Image source={iconChange}/>
            </View>
            <Image source={iconBox} style={styles.filters__grid}/>
       </View>
        <FlatList
        data={produtos}
        key={({id}, index) => id}
        numColumns={2}
        renderItem={({item}) => (
            <TouchableOpacity style={styles.card} onPress={() => {{navigation.navigate('Produto', {
                name: item.name, price: item.price, image: item.image, categoria: route.params.categoria
            })}}}>
            <Image style={styles.image} source={item.image}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>USD {item.price}</Text>
            </TouchableOpacity>
        )}
        />
       </SafeAreaView>
    )
}

