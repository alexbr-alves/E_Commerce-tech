import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Car from '../screens/car';
import Tracking from '../screens/tracking';

const Stack = createNativeStackNavigator();

export default function CartRotas(){
    return(
       
        <Stack.Navigator initialRouteName='Car'>
        <Stack.Screen name="Car" component={Car}  options={{
            title: '',
            headerShown: false
            }} />
       
        <Stack.Screen name="Tracking" component={Tracking} options={{
           title: '',
           headerShown: false,
            }}/>

            

        </Stack.Navigator>
      
    )
}