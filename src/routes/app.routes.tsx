import React from 'react'

import {FontAwesome, Ionicons} from '@expo/vector-icons'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Overview from '../pages/Overview'
import Wallet from '../pages/Wallet'
import Transaction from '../pages/Transaction'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Goals from '../pages/Goals'


const Tab = createBottomTabNavigator();


export default function AppRoutes() {
  return(
    <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: '#857CE2',
      inactiveTintColor: '#747272',
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
        name="Transaction" 
        component={Transaction} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='pie-chart' size={size} color={color} />
          )
        }}
        />
        <Tab.Screen 
        name="Wallet" 
        component={Wallet} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='bank' size={size} color={color} />
          )
        }}
        />
        <Tab.Screen 
        name="Goals" 
        component={Goals} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='flag-checkered' size={size} color={color} />
          )
        }}
        />       
        <Tab.Screen 
        name="Profile" 
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