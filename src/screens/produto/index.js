import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, ImageBackground } from "react-native";

import styles from './styles';
import iconBack from '../../../assets/images/iconBack.png';
import points from '../../../assets/images/points.png';
import splashCart from '../../../assets/images/splashCart.png';
import iconCart from '../../../assets/images/iconCart.png'

import { CarrinhoContext } from "../../contexts/CarrinhoContext";

export default function Produto({navigation: {goBack}}){
    const navigation = useNavigation();
    const route = useRoute();
    const [icon1, setIcon1] = useState(true);
    const [icon2, setIcon2] = useState(false);
    const [icon3, setIcon3] = useState(false);
    const [icon4, setIcon4] = useState(false);

    const [cap1, setCap1] = useState(true);
    const [cap2, setCap2] = useState(false);
    const [cap3, setCap3] = useState(false);

    const [modalVisivel, setModalVisivel] = useState(false)

    const {carrinho, addCarrinho } = useContext(CarrinhoContext)
   
    return(
        <View style={styles.container}> 
            <TouchableOpacity onPress={() => goBack()}>
                <Image style={styles.iconBack} source={iconBack} />
            </TouchableOpacity>
            <Text style={styles.title}>{route.params.name}</Text>
            <View style={styles.new}>
                <Text style={styles.new__text}>New</Text>
            </View>
            <Image style={styles.image} source={route.params.image}/>
            <Image style={styles.points} source={points}/>
            <Text style={styles.color__text}>Color</Text>
            <View style={styles.color__icons}>
                <TouchableOpacity  style={icon1 === true? styles.color__1__active : styles.color__1} 
                onPress={()=> {
                    {setIcon1(true)} {setIcon2(false)}{setIcon3(false)}{setIcon4(false)}
                }}></TouchableOpacity>

                <TouchableOpacity style={icon2 === true? styles.color__2__active : styles.color__2} onPress={()=> {
                    {setIcon1(false)} {setIcon2(true)}{setIcon3(false)}{setIcon4(false)}
                }}></TouchableOpacity>

                <TouchableOpacity style={icon3 === true? styles.color__3__active : styles.color__3} onPress={()=> {
                   {setIcon1(false)} {setIcon2(false)}{setIcon3(true)}{setIcon4(false)}
                }}></TouchableOpacity>

                <TouchableOpacity style={icon4 === true? styles.color__4__active : styles.color__4} onPress={()=> {
                   {setIcon1(false)} {setIcon2(false)}{setIcon3(false)}{setIcon4(true)}
                }}></TouchableOpacity>
            </View>
            <Text style={styles.capacity__title}> {route.params.categoria === "Smartphone"? 'Capacity' : 'RAM memory '}</Text>
            <View style={styles.capacity__space}>
                <TouchableOpacity onPress={() => {
                    {setCap1(true)} {setCap2(false)} {setCap3(false)}
                }}>
                <Text style={cap1 === true? styles.capacity__text__active: styles.capacity__text}>
                    {route.params.categoria === "Smartphone"? '64GB' : '8GB '}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={() => {
                    {setCap1(false)} {setCap2(true)} {setCap3(false)}
                }}>
                <Text style={cap2 === true? styles.capacity__text__active: styles.capacity__text}> {route.params.categoria === "Smartphone"? '256GB' : '16GB '}</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => {
                    {setCap1(false)} {setCap2(false)} {setCap3(true)}
                }}>
                <Text style={cap3 === true? styles.capacity__text__active: styles.capacity__text}> {route.params.categoria === "Smartphone"? '512GB' : '32GB '}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cart} onPress={() => {setModalVisivel(true)}}>
                <Text style={styles.cart__text}>Add to Cart</Text>
            </TouchableOpacity>
            <Modal visible={modalVisivel} animationType={'fade'}>
                <Image style={styles.image__modal} source={splashCart}/>
                <Image style={styles.modal__cart} source={iconCart}/>
                <TouchableOpacity style={styles.modal__buttom} onPress={() =>{{setModalVisivel(false)}{addCarrinho(route.params.name, route.params.price, route.params.image, icon1, icon2, icon3, icon4)}}}>
                    <Text style={styles.modal__buttom__text}>Back to shopping</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}
