import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";

import styles from "./styles";
import produtos from "../../mocks/produtos";
import points from '../../../assets/images/points.png'

export default function Home() {
    

    return(
        <ScrollView  style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <ScrollView style={styles.destaques} horizontal={true}>
           {destaques.map(({id, name, price, image}) => {
            return (
                    <TouchableOpacity key={id} style={styles.destaques__card}>
                        <View>
                        <Text style={styles.destaques__name}>{name}</Text>
                        <Text style={styles.destaques__price}>USD {price}</Text>
                        </View>
                        <Image style={styles.destaques__image} source={image}/>
                    </TouchableOpacity>    
            )
           })}
           </ScrollView>
           <Image style={styles.points} source={points}/>
        </ScrollView>
    )
}