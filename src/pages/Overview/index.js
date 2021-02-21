import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Overview() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>



    </View>
  );
}