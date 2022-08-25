import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Categories from '../screens/categories';
import Catalogo from '../screens/catalogo';
import Produto from '../screens/produto';


const Stack = createNativeStackNavigator();

export default function HomeRotas(){
    return(
       
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{
            title: '',
            headerShown: false
            }} />
       
            <Stack.Screen name="Categories" component={Categories} options={{
           title: '',
           headerShown: false,
            }}/>

            <Stack.Screen name="Catalogo" component={Catalogo} options={{
           title: '',
           headerShown: false
            }}/>

            <Stack.Screen name="Produto" component={Produto} options={{
           title: '',
           headerShown: false
            }}/>

        </Stack.Navigator>
      
    )
}