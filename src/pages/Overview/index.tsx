import React, { useEffect, useState, useContext } from "react";
import { View, FlatList, Image, Text, TouchableOpacity, Button } from "react-native";
import AuthContext from "../../contexts/auth";

import styles from "./styles";

export default function Overview() {
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View  style={styles.container}>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
      <Button title="Sign Out" onPress={handleSignOut} />

    </View>
  );
}