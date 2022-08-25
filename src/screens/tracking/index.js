import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";

import styles from './styles'
import Validation from '../../../assets/images/Validation.png'
import Graph from '../../../assets/images/Graph.png'

export default function Tracking(){
    const [tempo, setTempo] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setTempo(true)
        }, 3000);
      }, []);

    return(
        <View style={styles.container}>
            {tempo? 
            <View>
                <Text style={styles.title}>Tracking</Text>
                <Image style={styles.graph} source={Graph}/>
                <View style={styles.graph__texts}>
                    <Text style={styles.graph__text1e2}>Shipped</Text>
                    <Text style={styles.graph__text1e2}>In transit</Text>
                    <Text style={styles.graph__text3}>Delivered</Text>
                </View>
                <Text style={styles.tracking} >Tracking number</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.tracking__sigla}>UPS</Text>
                <Text style={styles.tracking__cod}>LO40569863554NI</Text>
                </View>

                <Text style={styles.date}>01/11/19</Text>
                <Text style={styles.descriptions}>Seller shipped your order</Text>

                <Text style={styles.date}>03/11/19</Text>
                <Text style={styles.descriptions}>Your order left the sorting center</Text>

                <Text style={styles.date}>04/11/19</Text>
                <Text style={styles.descriptions}>Your order das arrived in Paris, France</Text>

                <Text style={styles.date}>05/11/19</Text>
                <Text style={styles.descriptions}>Your order has left in Paris, France</Text>

                <Text style={styles.report}>Report a problem</Text>
            </View>







            :
            <Image style={styles.validation} source={Validation}/>
        }
        </View>
    )
}