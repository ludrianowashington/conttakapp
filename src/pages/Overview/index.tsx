import React, { useEffect, useState, useContext, useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { 
  Image,
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from "react-native";

import {useNavigation} from '@react-navigation/native';

import AuthContext from "../../contexts/auth";

import Balance from '../../components/Balance';
import Entry from "../Entry";

import {FontAwesome} from '@expo/vector-icons'

import styles from "./styles";
import { list } from './listTransaction'

import { PieChart } from "react-native-chart-kit";

const AppStack = createStackNavigator();

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Screen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8257E5" />
      <ScrollView 
      refreshControl={
         <RefreshControl 
         refreshing={refreshing} 
         onRefresh={onRefresh} 
       />}
      >
        <Balance/>        

        <View style={styles.view}>
          <View style={styles.card}>

            <Text style={styles.titleCard}>Resumo Mensal</Text>

              <PieChart
                data={data}
                width={370}
                height={250}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 10]}
                absolute
              />

              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Ver mais</Text>
              </TouchableOpacity>
             
          </View>

          <View style={styles.card}>

          <Text style={styles.titleCard}>Transações Recentes</Text>
                      
            <View style={styles.scroller}>
              <ScrollView>

                {list.map((item, index) => {
                  return (
                    <View style={styles.listItem} key={index}>
                      <View style={styles.image}>
                        <Text>{item.image}</Text>
                      </View>
                      <View style={styles.name}>
                        <Text style={styles.titleItem}>{item.title}</Text>
                        <Text style={styles.dateItem}>{item.date}</Text>
                      </View>
                      <View style={styles.value}>
                        <Text style={styles.currency}>R$ {item.value}</Text>
                      </View>
                    </View>
                  )})
                }
              
              </ScrollView>
            </View>
            
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default function Overview() {

  const navigation = useNavigation();

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
          title: 'Visão Geral',
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
                <FontAwesome name='refresh' size={23} color='#f9f9f9' />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableRight}
                onPress={()=> navigation.navigate('Entry')}
              >
                <FontAwesome name='plus' size={23} color='#f9f9f9' />
              </TouchableOpacity>
            </View>
          )
        }}
        />

        <AppStack.Screen
          name="Entry"
          component={Entry}
          options={{
            title: 'Entrada',
            headerStyle: {
              backgroundColor: '#8257E5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 13,
              fontFamily: 'Archivo_700Bold',
            }
          }}
        />
    </AppStack.Navigator>

    
  );
}