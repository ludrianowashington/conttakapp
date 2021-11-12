import React, { ReactNode, useCallback, useContext, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { FontAwesome } from '@expo/vector-icons';

import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ProgressBar } from 'react-native-paper';

import styles from './styles';

import AuthContext from '../../contexts/auth';

const AppStack = createStackNavigator();

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

// Component Function
function Screen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
        style={styles.profileContainer}>
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
        {/* <View style={styles.bar}>
          <Text style={styles.value}>100</Text>
          <ProgressBar
            progress={0.593}
            color='#9a89e6'
            style={styles.progressBar}
          />
          <Text style={styles.value}>500</Text>
        </View> */}
        <View style={styles.information}>
          <Text style={styles.name}>Ludriano Washington</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


// Header Function
export default function Profile() {
  const { signOut } = useContext(AuthContext);


  function handleSignOut() {
    signOut();
  }

  return (

    <AppStack.Navigator >
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
            <View style={styles.touchLeft}>
              <Image style={styles.img} source={require('../../assets/img/logoC.png')} />
            </View>
          ),
          headerRight: () => (
            <View style={styles.buttonsTouch}>
              <TouchableOpacity
                style={styles.touchableRight}
              >
                <FontAwesome name='plus' size={23} color='#f9f9f9' />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableRight}
              >
                <FontAwesome name='bars' size={23} color='#f9f9f9' />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </AppStack.Navigator>


  );

};

