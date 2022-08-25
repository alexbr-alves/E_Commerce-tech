import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import styles from "./styles";


export default function Car(){
   const {carrinho, total, limparCarrinho} = useContext(CarrinhoContext);
   const navigation = useNavigation();
   
   
   
    return(
        
        <ScrollView style={styles.container}>
            {total != 0? 
            <>
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
                    
                </View> )} />
                <View style={styles.descripts}>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Delivery</Text>
                        <View>
                        <Text style={styles.text2}>12 Madison Avenue, NYC</Text>
                        <Text style={styles.text3}>Fast delivery: 17/11/19</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text1}>Payment</Text>
                        <View>
                        <Text style={styles.text2}>Visa ***678</Text>
                        <Text style={styles.text3}>Expire 02/25</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text1}>Total</Text>
                        <View>
                        <Text style={styles.text2}>USD {total}</Text>
                        <Text style={styles.textGreen}>Entre a discount code</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingBottom: 30}}>    
                <TouchableOpacity style={styles.buttom} onPress={() =>{ {navigation.navigate('Tracking')} {limparCarrinho()}}}>
                    <Text style={styles.buttom__text}>Pay</Text>
                </TouchableOpacity>
                </View>

                </>
               :
              
            null         
            }
            

        </ScrollView>
    )
      
}