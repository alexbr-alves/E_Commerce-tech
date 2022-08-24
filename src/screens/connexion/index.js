import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useNavigation} from '@react-navigation/native'
import styles from './styles';
import google from '../../../assets/images/buttomGoogle.png';
import cta from '../../../assets/images/buttomCta.png';
import facebook from '../../../assets/images/buttomFacebook.png';
import points from '../../../assets/images/iconPoint4.png';


export default function Connexion(){
     const navigation = useNavigation();
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Connexion</Text>
           <TouchableOpacity onPress={() => {navigation.navigate('Create')}}>
                <Image source={cta} style={styles.cta}/>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {navigation.navigate('TabRotas')}}>
                <Image source={google} style={styles.google}/>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {{navigation.navigate('TabRotas')} }}>
                <Image source={facebook} style={styles.facebook}/>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.haveAccount}>Already have an account? Login</Text>
           </TouchableOpacity>

           <Image style={styles.points} source={points}/>

           <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.textSkip}>Skip for now</Text>
           </TouchableOpacity>
        </View>
    )
}