import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProgressBar } from "react-native-paper";

import { FontAwesome } from "@expo/vector-icons";

import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";

import AuthContext from "../../contexts/auth";
import { list, transactions } from "./list";
import { useNavigation } from "@react-navigation/native";
import App from "../../../App";
import FormGoal from "../FormGoal";

const AppStack = createStackNavigator();

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

// Component Function
function Screen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('GoalsDetails')}
            >
              <View style={styles.listItem} key={index}>
                <View style={styles.titleList}>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
                <View style={styles.bar}>
                  <ProgressBar
                    progress={item.progress}
                    color={item.color}
                    style={styles.progressBar}
                  />
                </View>
                <View style={styles.data}>
                  <View style={styles.op}>
                    <Text>Restam</Text>
                    <Text>R$ {item.rest}</Text>
                  </View>
                  <View style={styles.op}>
                    <Text>Faltam</Text>
                    <Text>R$ {item.expense}</Text>
                  </View>
                  <View style={styles.op}>
                    <Text>Total</Text>
                    <Text>R$ {item.limit}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

// Header Function
export default function Goals() {
  const { signOut } = useContext(AuthContext);

  function handleMenu() { }

  function handleSignOut() {
    signOut();
  }

  const navigation = useNavigation();

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Goals"
        component={Screen}
        options={{
          title: "Metas",
          headerStyle: {
            backgroundColor: "#8257E5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 13,
            fontFamily: "Archivo_700Bold",
            alignSelf: "center",
          },
          headerLeft: () => (
            <View style={styles.touchLeft}>
              <Image
                style={styles.img}
                source={require("../../assets/img/logoC.png")}
              />
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={styles.touchableRight}
              onPress={() => navigation.navigate('GoalsForm')}
            >
              <FontAwesome name="plus" size={23} color="#f9f9f9" />
            </TouchableOpacity>
          ),
        }}
      />

      <AppStack.Screen
        name='GoalsDetails'
        component={GoalsDetails}
        options={{
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: '#8257E5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 13,
            fontFamily: 'Archivo_700Bold',
          }
        }}
      />

      <AppStack.Screen
        name='GoalsForm'
        component={FormGoal}
        options={{
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: '#8257E5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 13,
            fontFamily: 'Archivo_700Bold',
          }
        }}
      />

    </AppStack.Navigator>
  );
}

function GoalsDetails() {
  return (
    <ScrollView style={styles.GlContainer}>
      <View style={styles.glHeader}>
        <View style={styles.glPerc}>
          <Text style={styles.glPercText}>12%</Text>
        </View>
        <View style={styles.glTitle}>
          <Text style={styles.glTitleText}>Alimentação</Text>
        </View>
      </View>
      <View style={styles.glValue}>
        <Text style={styles.glValueText}>Disponivel</Text>
        <Text style={styles.glValueCurrency}>R$ 30,00 de R$ 81,34</Text>
      </View>
      <View style={styles.glBody}>
        <View style={styles.glBodyTitle}>
          <Text style={styles.glBodyTitleText}>Transações</Text>
        </View>
        <View style={styles.glList}>
          <ScrollView>

            {transactions.map((item, index) => {
              return (
                <View style={styles.glListItem} key={index}>
                  <View style={styles.glImage}>
                    <Text>{item.image}</Text>
                  </View>
                  <View style={styles.name}>
                    <Text style={styles.titleItem}>{item.title}</Text>
                    <Text style={styles.dateItem}>{item.date}</Text>
                  </View>
                  <View style={styles.value}>
                    <Text style={styles.currency}>R$ {item.value}</Text>
                  </View>
                </View>
              )
            })
            }
          </ScrollView>
        </View>
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
    </ScrollView>
  );
}
