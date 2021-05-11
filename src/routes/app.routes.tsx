import React from 'react'

import {FontAwesome} from '@expo/vector-icons'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Overview from '../pages/Overview'
import Account from '../pages/Account'
import Transaction from '../pages/Transaction'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Goals from '../pages/Goals'


const Tab = createBottomTabNavigator();


export default function AppRoutes() {
  return(
    <Tab.Navigator
      tabBarOptions={{
        style: {
          justifyContent: 'space-around',
          height: 55,
          backgroundColor: '#8257E5',
        },
        activeTintColor: '#c7b9fa',
        inactiveTintColor: '#e3e2ec',
        labelStyle: {
          fontSize: 13,
          fontWeight: 'bold'
        }, 
        tabStyle: {
          alignItems: 'center',
                  
          paddingVertical: 3,
          
        }, 

        activeBackgroundColor: '#7a53d3'
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={Overview}
        options={{
          
          tabBarIcon: ({color, size}) => (
          
            <FontAwesome name='home' size={size} color={color}/>
          )
        }}
        />
      
      <Tab.Screen 
        name="Transações" 
        component={Transaction} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='exchange' size={size} color={color} />
          )
        }}
        />
        <Tab.Screen 
        name="Contas" 
        component={Account} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='bank' size={size} color={color} />
          )
        }}
        />
        <Tab.Screen 
        name="Metas" 
        component={Goals} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='bullseye' size={size} color={color} />
          )
        }}
        />       
        <Tab.Screen 
        name="Perfil" 
        component={Profile} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='user-circle' size={size} color={color} />
          )
        }}
        />
        
        
    </Tab.Navigator>
  );
}