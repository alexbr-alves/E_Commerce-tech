import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Intro1 from '../screens/intro1';
import Intro2 from '../screens/intro2';
import Intro3 from '../screens/intro3';
import Intro4 from '../screens/intro4';
import Connexion from '../screens/connexion';
import Create from '../screens/create'
import Login from '../screens/login'


import TabRotas from './tabRotas';


const Stack = createNativeStackNavigator();

export default function AppRotas(){
    return(
     <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Intro1" component={Intro1}  options={{
            title: '',
            headerShown: false
            }} />
       
            <Stack.Screen name="Intro2" component={Intro2} options={{
           title: '',
           headerShown: false,
            }}/>

            <Stack.Screen name="Intro3" component={Intro3} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Intro4" component={Intro4} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Connexion" component={Connexion} options={{
           title: '',
           headerShown: false
            }}/>
 
          <Stack.Screen name="Create" component={Create} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Login" component={Login} options={{
           title: '',
           headerShown: false
            }}/>
            <Stack.Screen name="TabRotas" component={TabRotas} options={{
           title: '',
           headerShown: false
            }}/>
   
        </Stack.Navigator>
        </NavigationContainer>
      
    )
}