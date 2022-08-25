import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import destaques from "../../mocks/destaques";

import iconCat from '../../../assets/images/iconCat.png'
import iconBest from '../../../assets/images/iconBest.png'
import iconFav from '../../../assets/images/iconFav.png'
import iconGif from '../../../assets/images/iconGif.png'

import smartphone from '../../../assets/images/smartphone.jpg'
import monitor from '../../../assets/images/monitor.jpg'
import s4 from '../../../assets/images/smartphone/s4.jpg'
import not2 from '../../../assets/images/notebook/not2.jpg'

export default function Home() {   
    const navigation = useNavigation();
    return( 
        <ScrollView style={styles.container}>    
         <Text style={styles.title}>Home</Text> 
            <AppIntroSlider
            key={({id}, index) => id}
            data={destaques}
            activeDotStyle={{
                backgroundColor:  '#A7A9BE',
                width: 7,
                height: 7,
            }}
            dotStyle={{
                width: 5,
                height: 5,
                backgroundColor: '#A7A9BE'
            }}
            renderItem={renderSlides}
            renderNextButton={ () => null}
            renderDoneButton={() => null}
            />
            <View style={styles.spaceIcons}>
                <View style={styles.spaceIcons__uni}>
                    <TouchableOpacity style={styles.spaceIcons__icon} onPress={() => {
                        navigation.navigate('Categories')
                    }}> 
                    <Image source={iconCat} />
                    </TouchableOpacity >
                    <Text style={styles.spaceIcons__text}>Categories</Text>
                </View>

                <View style={styles.spaceIcons__uni}>
                    <TouchableOpacity style={styles.spaceIcons__icon}>
                    <Image source={iconFav} />
                    </TouchableOpacity>
                    <Text style={styles.spaceIcons__text}>Favorites</Text>
                </View>

                <View style={styles.spaceIcons__uni}>
                    <TouchableOpacity style={styles.spaceIcons__icon}>
                    <Image source={iconGif} />
                    </TouchableOpacity>
                    <Text style={styles.spaceIcons__text}> Gifts</Text>
                </View>

                <View style={styles.spaceIcons__uni}>
                    <TouchableOpacity style={styles.spaceIcons__icon}>
                    <Image source={iconBest} />
                    </TouchableOpacity>
                    <Text style={styles.spaceIcons__text}>BEst selling</Text>
                </View>
            </View>
           <View style={styles.sales}>
           <Text style={styles.sales__title}>Sales</Text>
           <View style={styles.sales__row}>
            <TouchableOpacity style={styles.sales__produtos} onPress={() => {
                navigation.navigate('Catalogo', {categoria: 'Smartphone'})
            }}>
            <View style={styles.sales__desconto}>
                <Text style={styles.sales__descontoValor} >-50%</Text>
                </View>
                <Image style={styles.sales__image} source={smartphone}/>
                <Text style={styles.sales__titleProduto}>Smartphone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sales__produtos} onPress={() => {
                navigation.navigate('Catalogo', {categoria: 'Laptop'})
            }} >
                <View style={styles.sales__desconto}>
                <Text style={styles.sales__descontoValor} >-40%</Text>
                </View>
                
                <Image style={styles.sales__image}source={monitor} />
                <Text style={styles.sales__titleProduto}>Monitor</Text>
            </TouchableOpacity>
           </View>

           <View style={styles.sales__row}>
            <TouchableOpacity style={styles.sales__produtos} onPress={() => {
                navigation.navigate('Catalogo', {categoria: 'Smartphone'})
            }}>
            <View style={styles.sales__desconto}>
                <Text style={styles.sales__descontoValor} >-20%</Text>
                </View>
                <Image style={styles.sales__image} source={s4}/>
                <Text style={styles.sales__titleProduto}>Produtos Xiaomi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sales__produtos} onPress={() => {
                navigation.navigate('Catalogo', {categoria: 'Laptop'})
            }} >
                <View style={styles.sales__desconto}>
                <Text style={styles.sales__descontoValor} >-25%</Text>
                </View>
                
                <Image style={styles.sales__image}source={not2} />
                <Text style={styles.sales__titleProduto}>Notebooks</Text>
            </TouchableOpacity>
           </View>
           </View>
        </ScrollView>
    )
}

function renderSlides({item}){
    return(
        <View style={styles.destaques}  >
        <TouchableOpacity style={styles.destaques__card}>
        <View>
        <Text style={styles.destaques__name}>{item.name}</Text>
        <Text style={styles.destaques__price}>USD {item.price}</Text>
        </View>
        <Image style={styles.destaques__image} source={item.image}/>
    </TouchableOpacity>
    </View>  
    )
}