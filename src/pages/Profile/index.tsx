import React, { ReactNode, useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import {FontAwesome} from '@expo/vector-icons'; 

import {
  SafeAreaView,
   Text, 
   TouchableOpacity,
   View
} from 'react-native';

import styles from './styles';

import AuthContext from '../../contexts/auth';
import { ProgressBar } from 'react-native-paper';

const AppStack = createStackNavigator();

// Component Function
function Screen() {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.profileContainer}>
        <View style={styles.statistics}>
          <View style={styles.image}>
            <Text style={styles.letter}>LW</Text>
          </View>
          <View style={styles.data}>
            <View style={styles.dataItem}>
              <Text style={styles.value}>310</Text>
              <Text style={styles.title}>Pontuação</Text>
            </View>
            <View style={styles.dataItem}>
              <Text style={styles.value}>3</Text>
              <Text style={styles.title}>Nível</Text>
            </View>
          </View>
        </View>
        <View style={styles.bar}>
          <Text style={styles.value}>100</Text>
          <ProgressBar 
            progress={0.358} 
            color='#9480ec' 
            style={styles.progressBar}
          />
          <Text style={styles.value}>500</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}


// Header Function
export default function Profile() {
  const {signOut} = useContext(AuthContext);


  function handleSignOut() {
    signOut();
  }

  return (

    <AppStack.Navigator>
      <AppStack.Screen name='Profile' 
        component={Screen}
        options={{
          title: 'Perfil',
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
              style={styles.touchableLeft}
            >
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

