import React, { useContext, useState } from "react";
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
  const [inputValue, setInputValue] = useState('')

  const iconSelect = (selectedItem:number)=>{
    if (selectedItem === 0) return <FontAwesome name='plus' size={19} color='#8175BA'/>
    if (selectedItem === 1) return <FontAwesome name='minus' size={19} color='#8175BA'/>
    if (selectedItem === 2) return <FontAwesome name='exchange' size={19} color='#8175BA'/>
  }

  return(
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
            onChangeText={setInputValue}
            placeholder='0.00'
            placeholderTextColor='#8175BA'
            keyboardType='number-pad'
          />
        </View>
      </View>
    </ScrollView>

  )
}