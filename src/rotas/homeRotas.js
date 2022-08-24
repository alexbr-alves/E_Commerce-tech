import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../screens/home/index'
import Car from '../screens/car/index';
import Seach from '../screens/seach/index';
import User from '../screens/user';

import AppRotas from './appRotas';

const Tab = createBottomTabNavigator();

export default function HomeRotas() {
 
  return (
    
      <Tab.Navigator  screenOptions={({route}) => ({
        tabBarStyle: {
            height: 73,
            backgroundColor: '#EFF5FB'
        },
        headerShown: false,
        tabBarInactiveTintColor: '#0A1034',
        tabBarActiveTintColor: '#0001fc',
        tabBarIcon: ({ color, size}) => {
            let iconName;
            if(route.name === 'Home'){iconName = 'home'}
            else if(route.name === 'Seach'){iconName = 'search1'}
            else if(route.name === 'Car'){iconName = 'shoppingcart'}
            else if(route.name === 'User'){iconName = 'user'}
            return <Icon name={iconName} color={color} size={size}/>
        }
      })}
        
      >
        <Tab.Screen name="Home" component={Home} options={{
            title: '', tabBarStyle: true }}/>

        <Tab.Screen name="Seach" component={Seach} options={{
            title: '', }} />

        <Tab.Screen name="Car" component={Car} options={{
            title: '',  }}  />
        
        <Tab.Screen name="User" component={User} options={{
            title: '',  }}  />
      </Tab.Navigator>
    
  );
}
