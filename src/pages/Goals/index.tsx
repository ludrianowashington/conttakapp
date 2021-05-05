import React, { ReactNode, useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import {FontAwesome} from '@expo/vector-icons'; 

import {
  FlatList,
  RefreshControl,
  SafeAreaView,
   Text, 
   TouchableOpacity,
   View
} from 'react-native';

import styles from './styles';

import AuthContext from '../../contexts/auth';
import { list } from './list';

const AppStack = createStackNavigator();

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

// Component Function
function Screen() {
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList 
          data={list}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index})=>(
            <TouchableOpacity >
              <View style={styles.listItem} key={index}>
                <View style={styles.titleList}>
                  <Text>{item.title}</Text>
                </View>
                <View style={styles.bar}>
                  <Text>{item.title}</Text>
                </View>
                <View style={styles.data}>
                  <Text style={styles.rest}>Restam R$ {item.rest}</Text>
                  <Text style={styles.current}>Faltam R$ {item.expense}</Text>
                  <Text style={styles.expected}>Total R$ {item.limit}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}


// Header Function
export default function Goals() {
  const {signOut} = useContext(AuthContext);

  function handleMenu() {}

  function handleSignOut() {
    signOut();
  }

  return (

    <AppStack.Navigator>
      <AppStack.Screen name='Goals' 
        component={Screen}
        options={{
          title: 'Goals',
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

