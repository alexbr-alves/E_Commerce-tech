import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import {useNavigation} from '@react-navigation/native'
import styles from "./styles";

import points from '../../../assets/images/iconPoint4.png';


export default function Login() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>


            <View style={styles.email}>
            <Text style={styles.email__text}>Email</Text>
            <TextInput
                style={styles.email__input}
                autoCapitalize="none"
               placeholder="Email"
               placeholderTextColor={'#ffffff'}
                 />
            </View>

            <View style={styles.password}>
            <Text style={styles.password__text}>Email</Text>
            <TextInput
                style={styles.password__input}
                autoCapitalize="none"
               placeholder="Password"
               placeholderTextColor={'#ffffff'}
                 />
            </View>

            <TouchableOpacity style={styles.validate}  onPress={() => {navigation.navigate('HomeScreen')}}>
                <Text style={styles.validate__text}>Validate</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Connexion')}}>
                <Text style={styles.haveAccount}>Don't have an account? Sign-up</Text>
           </TouchableOpacity>

           <Image style={styles.points} source={points}/>

           <TouchableOpacity>
                <Text style={styles.textSkip}>Skip for now</Text>
           </TouchableOpacity>
        </View>
    )
}