import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Overview from '../pages/Overview'

const AppStack = createStackNavigator();

export default function AppRoutes() {
  return(
    <AppStack.Navigator>
      <AppStack.Screen name='Overview' 
        component={Overview}
        options={{
          title: 'Overview',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }}
        />
    </AppStack.Navigator>
  );
}