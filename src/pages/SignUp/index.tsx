import React, { useEffect, useState } from "react";

import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/img/logo.png'

import {
  Container,
  Logo,
  Input,
  Button,
  Scroll,
  StyledText,
  Section,
  StyleLink
} from "./styles";



export default function SignUp() {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo source={logoImg} />

      <Scroll
        horizontal={false}
        >
        
        <Input
          label='Nome'
          placeholder='Nome'
          keyboardType={"default"}
          />
        <Input
          label='Sobrenome'
          placeholder='Sobrenome'
          keyboardType={"default"}
          />
        <Input
          label='Usuário'
          placeholder='Usuário'
          keyboardType={"default"}
          />
        <Input
          label='Email'
          placeholder='Email'
          keyboardType={"email-address"}
          />
        <Input
          label='Senha'
          placeholder='Senha'
          secureTextEntry={true}
          />
        <Input
          label='Confirme'
          placeholder='Repita sua senha'
          secureTextEntry={true}
          />

        <Button>
          <StyledText>Cadastrar</StyledText>
        </Button>

        <StyleLink onPress={() => navigation.navigate('SignIn')}>
          <StyledText>Voltar</StyledText>
        </StyleLink>
      </Scroll>
      



    </Container>


  );
}