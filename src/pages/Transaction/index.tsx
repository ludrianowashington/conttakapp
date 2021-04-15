import React, { ReactNode, useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import {FontAwesome} from '@expo/vector-icons'; 

import {
   Text, 
   TouchableOpacity
} from 'react-native';

import styles from './styles';

import AuthContext from '../../contexts/auth';

const AppStack = createStackNavigator();

// Component Function
function Screen() {
  return(
    <Text>Transaction</Text>
  )
}


// Header Function
export default function Transaction() {
  const {signOut} = useContext(AuthContext);

  function handleMenu() {}

  function handleSignOut() {
    signOut();
  }

  return (

    <AppStack.Navigator>
      <AppStack.Screen name='Overview' 
        component={Screen}
        options={{
          title: 'Overview',
          headerStyle: {
            backgroundColor: '#8257E5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 13,
            fontFamily: 'Archivo_700Bold',
            alignSelf: 'center'
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={handleMenu}
              style={styles.touchableLeft}
            >
             <FontAwesome name='bars' size={23} color='#f9f9f9'/>
          </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={handleSignOut}
              style={styles.touchableRight}
            >
              <FontAwesome name='sign-out' size={23} color='#f9f9f9' />
          </TouchableOpacity>
          )
        }}
        />
    </AppStack.Navigator>

    
  );

};

