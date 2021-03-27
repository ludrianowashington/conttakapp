import React, { useContext, useEffect, useState } from "react";
import {useNavigation} from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Button, TextInput} from "react-native";

import logoImg from '../../assets/img/logo.png'

import {styles} from "./styles";

import AuthContext from "../../contexts/auth";

export default function SignIn() {


  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const {signIn} = useContext(AuthContext);
  
  const navigation = useNavigation();
  

  function handleSignIn() {
    signIn({email, pass})
  }


  function navigateForgot () {
    navigation.navigate("Forgot")
  }

  function navigateSignUp() {
    navigation.navigate("SignUp")
  }

  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} /> 

      <TextInput
        style={styles.input}
        placeholder='Digite seu email'
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        secureTextEntry={true}
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <TouchableOpacity style={styles.link} >
          <Text style={styles.text}>Esqueci a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} >
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

    </View>


  );
}