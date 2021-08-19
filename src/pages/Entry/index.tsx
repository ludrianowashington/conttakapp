import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProgressBar } from "react-native-paper";

import { FontAwesome } from "@expo/vector-icons";

import {
  Image,
  ScrollView,
  SafeAreaView, 
  TouchableOpacity,
  View
} from "react-native";

import styles from "./styles"

const AppStack = createStackNavigator();

function Screen() {

  return (
    <SafeAreaView style={{flex: 1}}></SafeAreaView>
  )
}

export default function Entry() {

  return(
    <ScrollView style={{flex: 1}}>
      
    </ScrollView>

  )
}