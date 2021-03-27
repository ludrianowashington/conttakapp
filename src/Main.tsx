import "intl";
import "intl/locale-data/jsonp/pt-BR";


import React, {useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import * as Updates from 'expo-updates';

import { NavigationContainer } from '@react-navigation/native';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import {AuthProvider} from './contexts/auth'
import Routes from './routes';

export default function Main() {

  // useEffect(() => {
  //   async function updateApp() {
  //     const {isAvailable} = await Updates.checkForUpdateAsync();

  //     if (isAvailable) {
  //       await Updates.fetchUpdateAsync();

  //       await Updates.reloadAsync();
  //     }
      
  //   }

  //   updateApp();

  // }, [])
  
  let [fontsLoaded] = useFonts({
    Archivo_400Regular, Archivo_700Bold, Poppins_400Regular, Poppins_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {

    return (
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    );
  }
}