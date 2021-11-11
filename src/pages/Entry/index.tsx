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
  const buttons = ['Receita', 'Despesa', 'Transferência'];

  const [selectedItem, setSelectedItem] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const iconSelect = (selectedItem: number) => {
    const size = 30;
    const color = '#8175BA';

    if (selectedItem === 0) return <FontAwesome name='plus' size={size} color={color} />
    if (selectedItem === 1) return <FontAwesome name='minus' size={size} color={color} />
    if (selectedItem === 2) return <FontAwesome name='exchange' size={size} color={color} />
  }

  function formatValue(value: any) {
    let val = value;

    val = val + '';
    val = parseInt(val.replace(/[\D]+/g, ''));
    val = val + '';

    if (val.length < 2) {
      return val.replace(/([0-9]{1})/g, "0,0$1");

    }

    if (val.length == 2) {
      return val.replace(/([0-9]{2})/g, "0,$1")
    }

    val = val.replace(/([0-9]{1})([0-9]{14})$/, "$1.$2") // insert dot before the last digits
    val = val.replace(/([0-9]{1})([0-9]{11})$/, "$1.$2") // insert dot before the last 11 digits
    val = val.replace(/([0-9]{1})([0-9]{8})$/, "$1.$2") // insert dot before the last 8 digits
    val = val.replace(/([0-9]{1})([0-9]{5})$/, "$1.$2") // insert dot before the last 5 digits
    val = val.replace(/([0-9]{1})([0-9]{1,2})$/, "$1,$2") // insert comma before the last 2 digits

    if (isNaN(val)) return val.replace("0,00"); //

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
          <View style={styles.icons}>
            {iconSelect(selectedItem)}
          </View>
          <TextInput
            style={styles.inputText}
            value={inputValue}
            onChangeText={e => setInputValue(formatValue(e))}
            placeholder='0,00'
            placeholderTextColor='#8175BA'
            keyboardType='number-pad'
          />
        </View>
      </View>
      <View style={styles.viewInputs}>

      </View>
    </ScrollView>

  )
}