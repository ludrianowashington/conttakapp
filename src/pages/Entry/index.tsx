import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProgressBar } from "react-native-paper";

import { FontAwesome } from "@expo/vector-icons";

import {
  Button,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";

import {
  ButtonGroup
} from 'react-native-elements';

import styles from "./styles"

const AppStack = createStackNavigator();



export default function Entry() {
  const buttons = ['Despesa', 'Receita', 'Tranferência'];

  const [selectedItem, setSelectedItem] = useState(0)
  const [inputValue, setInputValue] = useState('0,00')

  const iconSelect = (selectedItem: number) => {
    if (selectedItem === 0) return <FontAwesome name='plus' size={19} color='#8175BA' />
    if (selectedItem === 1) return <FontAwesome name='minus' size={19} color='#8175BA' />
    if (selectedItem === 2) return <FontAwesome name='exchange' size={19} color='#8175BA' />
  }

  function formatValue(value: any) {
    let val = value;

    val = val + '';
    val = parseInt(val.replace(/[\D]+/g, ''));
    val = val + '';

    val = val.replace(/\D/g, "") // permite digitar apenas numero
    val = val.replace(/(\d{1})(\d{14})$/, "$1.$2") // coloca ponto antes dos ultimos digitos
    val = val.replace(/(\d{1})(\d{11})$/, "$1.$2") // coloca ponto antes dos ultimos 11 digitos
    val = val.replace(/(\d{1})(\d{8})$/, "$1.$2") // coloca ponto antes dos ultimos 8 digitos
    val = val.replace(/(\d{1})(\d{5})$/, "$1.$2") // coloca ponto antes dos ultimos 5 digitos
    val = val.replace(/(\d{1})(\d{1,2})$/, "$1,$2") // coloca virgula antes dos ultimos 2 digitos

    // if (val.length < 2) {
    //   return val.replace(/([0-9]{1})/g, "0,0$1");
    // }
    // if (val.length == 2) {
    //   return val.replace(/([0-9]{2})/g, "0,$1")
    // }

    // val = val.replace(/([0-9]{2})$/g, ",$1");

    // if (val.length > 6) {
    //   return val.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    // }

    if (isNaN(val)) return val.replace("0,00");

    return val;
  }

  return (
    <ScrollView>
      <View style={styles.view}>
        <ButtonGroup
          onPress={value => setSelectedItem(value)}
          buttons={buttons}
          selectedIndex={selectedItem}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonGroup}
          selectedButtonStyle={styles.button}
          textStyle={styles.buttonText}
        />

        <View style={styles.display}>
          {iconSelect(selectedItem)}
          <TextInput
            style={styles.inputText}
            value={inputValue}
            onChangeText={e => setInputValue(formatValue(e))}
            placeholder='0.00'
            placeholderTextColor='#8175BA'
            keyboardType='number-pad'
          />
        </View>
      </View>
    </ScrollView>

  )
}