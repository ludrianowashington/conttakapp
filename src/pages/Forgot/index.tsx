import React, { useEffect, useState } from "react";
import {useNavigation} from '@react-navigation/native'


// import logoImg from '../../assets/img/logo2.png';

import "./styles";
import { TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



export default function SignIn() {
  const navigation = useNavigation();


  function navigateForgot () {
    navigation.navigate("SignIn")
  }
  
  return (
    <View >
      {/* <Logo source={logoImg} /> */}

      <TextInput
        placeholder='Digite seu email'
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='Digite sua senha'
        secureTextEntry={true}
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity onPress={handleSignIn}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <View>
        <Link to='/' onPress={navigateForgot}>
          <Text>Esqueci a senha</Text>
        </Link>
        <Link to='/' onPress={navigateSignUp}>
          <Text>Cadastrar</Text>
        </Link>
      </View>

    </View>


  );
}