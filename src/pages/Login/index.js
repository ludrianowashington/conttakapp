import React, { useEffect, useState } from "react";

import { Link } from "@react-navigation/native";

import logoImg from '../../assets/img/logo.png'

import {
  Container,
  Logo,
  Input,
  Button,
  Text,
  Section,
  StyleLink
} from "./styles";

export default function Login() {

  return (
    <Container>
      <Logo source={logoImg} />

      <Input
        label='Email'
        placeholder='Digite seu email'
        keyboardType={"email-address"}
      />
      <Input
        label='Senha'
        placeholder='Digite sua senha'
        secureTextEntry={true}
      />

      <Button>
        <Text>Entrar</Text>
      </Button>

      <Section>
        <StyleLink to='/'>Esqueci a senha</StyleLink>
        <StyleLink to='/'>Cadastrar</StyleLink>
      </Section>

    </Container>


  );
}