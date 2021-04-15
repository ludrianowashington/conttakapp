import React, { useEffect, useState, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
} from "react-native";

import AuthContext from "../../contexts/auth";

import Balance from '../../components/Balance'

import {FontAwesome} from '@expo/vector-icons'

import styles from "./styles";

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

function Screen() {


  return(
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Balance/>        

        <View style={styles.view}>
          <View style={styles.card}>

            <Text style={styles.titleCard}>Resumo Mensal</Text>

              <Text>Bezier Bar Chart</Text>
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
             
          </View>

          <View style={styles.card}>

          <Text style={styles.titleCard}>Transações Recentes</Text>
            <ScrollView>
              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 12.623,53</Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 23,53</Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 23,53</Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 23,53</Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 23,53</Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 23,53</Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 23,53</Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 23,53</Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.img}>
                  <Text>N</Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.titleItem}>Netflix</Text>
                  <Text style={styles.dateItem}>Apr 23, 2021</Text>
                </View>
                <View style={styles.value}>
                  <Text style={styles.currency}>R$ 23,53</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default function Overview() {

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
}