import styled from 'styled-components/native';

import { Link } from "@react-navigation/native";

export const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #8257E5;
  resizeMode: contain;
`;

export const Logo = styled.Image`
  width: 55%;
  height: 15%;
  marginBottom: 40px;
  resizeMode: contain;
`;

export const Input = styled.TextInput`
  width: 80%;
  paddingHorizontal: 20px;
  paddingVertical: 12px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: center;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #04D361;
  alignSelf: center;
  alignItems: center;
`;

export const Text = styled.Text`
  fontFamily: 'Archivo_700Bold';
  fontSize: 18px;
  fontWeight: 700;
  color: #fff;
  `;

export const Section = styled.View`
  width: 80%;
  flexDirection: row;
  color: #fff;
  justifyContent: space-between;
  marginTop: 13px;
  `;

export const StyleLink = styled(Link)`
  color: #FFF;
  paddingHorizontal: 20px;
  font-family: 'Archivo_700Bold';
  paddingVertical: 5px;
  paddingHorizontal: 10px;
`;