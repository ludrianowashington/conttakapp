import React, { useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {ProgressBar} from 'react-native-paper'

import {FontAwesome} from '@expo/vector-icons'; 

import {
  FlatList,
  Image,
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
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
                <View style={styles.bar}>
                  <ProgressBar 
                    progress={item.progress} 
                    color={item.color} 
                    style={styles.progressBar}
                  />
                </View>
                <View style={styles.data}>
                  <View style={styles.op}>
                    <Text>Restam</Text> 
                    <Text>R$ {item.rest}</Text>
                  </View>
                  <View style={styles.op}>
                    <Text>Faltam</Text> 
                    <Text>R$ {item.expense}</Text>
                  </View>
                  <View style={styles.op}>
                    <Text>Total</Text> 
                    <Text>R$ {item.limit}</Text>
                  </View>
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
          title: 'Metas',
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
            <TouchableOpacity
              style={styles.touchableRight}
            >
              <FontAwesome name='plus' size={23} color='#f9f9f9' />
          </TouchableOpacity>
          )
        }}
        />
    </AppStack.Navigator>

    
  );

};

