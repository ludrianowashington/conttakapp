import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #8257E5;
  resizeMode: contain;
`;

export const Logo = styled.Image`
  width: 70%;
  height: 30%;
  marginBottom: 40px;
  resizeMode: contain;
`;

export const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 18px;
`;

export const Button = styled.TouchableOpacity`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #04D361;
  alignSelf: stretch;
  alignItems: center;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
  resizeMode: contain; 
`;

export const Text = styled.Text`
  fontFamily: 'Archivo_700Bold';
  fontSize: 20;
  fontWeight: 700;
  color: #fff;
`;

export const Header = styled.View`
  resizeMode: contain;
  flex: 1;
  height: 30;
  alignSelf: center;
`;

