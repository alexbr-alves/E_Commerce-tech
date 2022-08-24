import React, { useContext, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import styles from "./styles";

export default function Car(){
   const {carrinho} = useContext(CarrinhoContext);
   console.log(carrinho)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>
            <FlatList
            horizontal={true}
            keyExtractor={({name}, index) => name}
            data={carrinho}
            renderItem={({item}) => (
                <View style={styles.areaProduto}>
                    <View style={styles.areaNew}>
                    <Text style={styles.new}>New</Text>
                    </View>
                    <Image style={styles.image} source={item.image}/>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>USD {item.price}</Text>

                    
                </View>

            )}
            />
        </View>
    )
}