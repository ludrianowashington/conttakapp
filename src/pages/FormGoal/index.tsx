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

import styles from "./styles";



export default function FormGoal() {

    const [inputValue, setInputValue] = useState('');

    const [isOpenDetails, setIsOpenDetails] = useState(false);



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
            <ScrollView style={styles.viewInputs}>
                <View style={styles.view}>
                    <View style={styles.display}>
                        <View style={styles.icons}>
                            <Text style={styles.textFormInput}>R$</Text>
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
                <View style={styles.form}>
                    <View style={styles.formInputs}>
                        <Text style={styles.textForm}>Nome</Text>
                        <TextInput
                            style={styles.inputForm}
                            placeholder='Adicione a descrição'
                        />
                    </View>
                    <Pressable style={styles.formInputs}>
                        <Text style={styles.textForm}>Categoria</Text>
                        <Text style={styles.buttonForm}>tipo_categoria</Text>
                    </Pressable>

                    {/* <View style={styles.formInputs}>
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
                    </View> */}
                    {/* <View style={styles.formInputs}>
                        <Text style={styles.textForm}>Tags</Text>
                        <TextInput
                            style={styles.inputForm}
                            placeholder='Anexar tags'
                        />
                    </View> */}
                    <View style={styles.formInputs}>
                        <Text style={styles.textForm}>Observação</Text>
                        <TextInput
                            style={styles.inputForm}
                            placeholder='Adicione alguma observação'
                        />
                    </View>
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