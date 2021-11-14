import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProgressBar } from "react-native-paper";

import { FontAwesome } from "@expo/vector-icons";

import {
  Button,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Pressable,
  View,
  TextInput,
  Alert
} from "react-native";

import {
  ButtonGroup
} from 'react-native-elements';

import styles from "./styles";


const AppStack = createStackNavigator();



export default function Entry() {
  const buttons = ['Receita', 'Despesa', 'Transferência'];

  const [selectedItem, setSelectedItem] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const [isOpenDetails, setIsOpenDetails] = useState(false);

  const iconSelect = (selectedItem: number) => {
    const size = 30;
    const color = '#8175BA';

    if (selectedItem === 0) return <FontAwesome name='plus' size={size} color={color} />
    if (selectedItem === 1) return <FontAwesome name='minus' size={size} color={color} />
    if (selectedItem === 2) return <FontAwesome name='exchange' size={size} color={color} />
  }

  function formatValue(value: any) {
    let val = value;

    val = parseInt(val.replace(/[\D]+/g, ''));
    val = val + '';

    if (isNaN(val)) val = val.replace("0,00"); //


    val = val.replace(/([0-9]+)([0-9]{14})$/, "$1.$2") // insert dot before the last digits
    val = val.replace(/([0-9]+)([0-9]{11})$/, "$1.$2") // insert dot before the last 11 digits
    val = val.replace(/([0-9]+)([0-9]{8})$/, "$1.$2") // insert dot before the last 8 digits
    val = val.replace(/([0-9]+)([0-9]{5})$/, "$1.$2") // insert dot before the last 5 digits
    val = val.replace(/([0-9]+)([0-9]{2})$/, "$1,$2") // insert comma before the last 2 digits

    if (val.length == 2) {
      val = val.replace(/([0-9]{2})/g, "0,$1")
    }

    if (val.length < 2) {
      val = val.replace(/([0-9]{1})/g, "0,0$1");
    }

    return val;
  }

  function toggleDetails() {
    setIsOpenDetails(!isOpenDetails)
  }

  return (
    <>
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
      <ScrollView style={styles.viewInputs}>
        <View style={styles.form}>
          <View style={styles.formInputs}>
            <Text style={styles.textForm}>Descrição</Text>
            <TextInput
              style={styles.inputForm}
              placeholder='Adicione a descrição'
            />
          </View>
          <Pressable style={styles.formInputs}>
            <Text style={styles.textForm}>Categoria</Text>
            <Text style={styles.buttonForm}>tipo_categoria</Text>
          </Pressable>
          <Pressable style={styles.formInputs}>
            <Text style={styles.textForm}>Conta</Text>
            <Text style={styles.buttonForm}>tipo_conta</Text>
          </Pressable>
          <Pressable style={styles.formInputs}>
            <Text style={styles.textForm}>Data</Text>
            <Text style={styles.buttonForm}>tipo_data</Text>
          </Pressable>
          <View style={styles.formInputs}>
            <Text style={styles.textForm}>Repetir Lançamento</Text>
            <View style={styles.viewButtons}>
              <View style={styles.buttonsGroup}>
                <Pressable style={styles.buttonType}>
                  <Text style={styles.buttonTypeText}>Fixo</Text>
                </Pressable>
                <Pressable style={styles.buttonType}>
                  <Text style={styles.buttonTypeText}>Parcelado</Text>
                </Pressable>
              </View>
              <View style={styles.viewSelection}></View>
            </View>
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#B3BAD5AA'
                  : '#B3BAD5'
              },
              styles.formButton
            ]}
            onPress={toggleDetails}
          >
            <Text style={styles.formButtonText}>Detalhar lançamento</Text>
          </Pressable>
          {isOpenDetails && (
            <View>
              <View style={styles.formInputs}>
                <Text style={styles.textForm}>Tags</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder='Anexar tags'
                />
              </View>
              <View style={styles.formInputs}>
                <Text style={styles.textForm}>Observação</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder='Adicione alguma observação'
                />
              </View>
              <View style={styles.formInputs}>
                <Text style={styles.textForm}>Anexos</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder='Adicionar anexos'
                />
              </View>
            </View>
          )}
          <View style={styles.submit}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => Alert.alert('Atenção!!!', 'Este botão ainda não funciona', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'Tudo bem', onPress: () => console.log('TUDO BEM Pressionado') },
              ])}
            >
              <FontAwesome name='check' size={25} color='#EDECFA' />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>

  )
}