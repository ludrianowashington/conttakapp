import React, { ReactNode, useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {FontAwesome} from '@expo/vector-icons'; 

import {
  Image,
  RefreshControl,
  SafeAreaView,
  Text, 
  TouchableOpacity,
  View
} from 'react-native';

import styles from './styles';

import AuthContext from '../../contexts/auth';
import { FlatList } from 'react-native-gesture-handler';
import { cards, list } from './listAccounts';

const AppStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

// Function Component One
function FirstScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return(
    // <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList 
          data={list}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index})=>(
            <TouchableOpacity >
              <View style={styles.listItem} key={index}>
                <View style={styles.img}>
                  <Text>{item.image}</Text>
                </View>
                <View style={styles.data}>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.type}>Conta Corrente</Text>
                  <Text style={styles.current}>Saldo atual: R$ {item.balanceCurrent}</Text>
                  <Text style={styles.expected}>Saldo Previsto: R$ {item.balanceExpected}</Text>
                 
                  {/* <View style={styles.options}>
                    <TouchableOpacity style={styles.buttonOptions}>
                      <FontAwesome name='edit' size={20} color='#7778a5'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions}>
                      <FontAwesome name='pencil' size={20} color='#7778a5'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions}>
                      <FontAwesome name='ellipsis-v' size={20} color='#7778a5'/>
                    </TouchableOpacity>
                  </View> */}
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    // </SafeAreaView>
  )
}

// Function Component Two
function SecondScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList 
          data={cards}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index})=>(
            <TouchableOpacity >
              <View style={styles.listItem} key={index}>
                <View style={styles.img}>
                  <Text>{item.image}</Text>
                </View>
                <View style={styles.data}>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.type}>{item.flag}</Text>
                  <Text style={styles.current}>{item.account}</Text>
                  <Text style={styles.expected}>Limite: R$ {item.limit}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

//Function Tab Navigation
function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Bank"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#c1c1c2',
        style: {
          backgroundColor: '#8257E5'
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 13,
          fontWeight: 'bold'
        },
        indicatorStyle: {
          borderBottomColor: '#00ff0d',
          borderBottomWidth: 3,
        },
      }}>
      <Tab.Screen
        name="Banks"
        component={FirstScreen}
        options={{
          tabBarLabel: 'Bancos',
        }}  
      />
      <Tab.Screen
        name="Cards"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Cartões',
        }}  
      />
      
    </Tab.Navigator>
  )
}

// Header Function
export default function Account() {
  const {signOut} = useContext(AuthContext);

  function handleMenu() {}

  function handleSignOut() {
    signOut();
  }

  return (

    <AppStack.Navigator>
      <AppStack.Screen name='Account' 
        component={TabStack}
        options={{
          title: 'Contas',
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
              <Image style={styles.image} source={require('../../assets/img/logoC.png')} />
            </View>
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

