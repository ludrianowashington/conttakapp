import React, { ReactNode, useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';

import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import ProgressBar from 'rn-circular-bar';

import styles from './styles';
import FormAccount from "../FormAccount";

import AuthContext from '../../contexts/auth';
import { FlatList } from 'react-native-gesture-handler';
import { cards, list } from './listAccounts';

const AppStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

// Function Component One
function FirstScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const navigation = useNavigation();

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <FlatList
        data={list}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('BankDetails')}
          >
            <View style={styles.listItem} key={index}>
              <View style={styles.img}>
                <Text>{item.image}</Text>
              </View>
              <View style={styles.data}>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.type}>Conta Corrente</Text>
                <Text style={styles.current}>Saldo atual: R$ {item.balanceCurrent}</Text>
                <Text style={styles.expected}>Saldo Previsto: R$ {item.balanceExpected}</Text>

                {/* <View style={styles.options}>
                    <TouchableOpacity style={styles.buttonOptions}>
                      <FontAwesome name='edit' size={20} color='#7778a5'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions}>
                      <FontAwesome name='pencil' size={20} color='#7778a5'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOptions}>
                      <FontAwesome name='ellipsis-v' size={20} color='#7778a5'/>
                    </TouchableOpacity>
                  </View> */}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    // </SafeAreaView>
  )
}

// Function Component Two
function SecondScreen() {
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
          data={cards}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CardsDetails')}
            >
              <View style={styles.listItem} key={index}>
                <View style={styles.img}>
                  <Text>{item.image}</Text>
                </View>
                <View style={styles.data}>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.type}>{item.flag}</Text>
                  <Text style={styles.current}>{item.account}</Text>
                  <Text style={styles.expected}>Limite: R$ {item.limit}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

//Function Bank Details
function BankDetails() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.bnkContainer}>
      <View style={styles.bnkHeader}>
        <View style={styles.bnkAvatar}>
          <ProgressBar
            radius={55}
            progress={60}
            progressFontSize={30}
            strokeWidth={5}
            opacity={.1}
            showPercentSymbol={true}
            color='#7a59f6'
          />
        </View>
        <View style={styles.bnkTitle}>
          <Text style={styles.bnkTitleText}>Minha Carteira</Text>
          {/* <Text style={styles.bnkTitleBtn}>E</Text> */}
        </View>
      </View>
      <View style={styles.bnkBody}>
        <View style={styles.bnkBodyContent}>
          <View style={styles.bnkBodyItems}>
            <Text style={styles.bnkBodyText}>Saldo Inicial:</Text>
            <Text style={styles.bnkBodyTextValue}>R$ 112,32</Text>
          </View>
          <View style={styles.bnkBodyItems}>
            <Text style={styles.bnkBodyText}>Saldo Atual:</Text>
            <Text style={styles.bnkBodyTextValue}>R$ 512,32</Text>
          </View>
          <View style={styles.bnkBodyItems}>
            <Text style={styles.bnkBodyText}>Saldo Previsto:</Text>
            <Text style={styles.bnkBodyTextValue}>R$ 102,32</Text>
          </View>

          <View style={styles.bnkBodyItemsData}>
            <Text style={styles.bnkBodyText}>Dados Adicionais</Text>
            <Text style={styles.bnkBodyTextItem}>Nenhum</Text>
          </View>
          <View style={styles.bnkBodyList}>
            <Text style={styles.bnkBodyListTitle}>Últimas Transações</Text>
            <View style={styles.bnkBodyListContent}>
              <View style={styles.bnklistItem}>
                <View style={styles.bnkImg}>
                  <Text>M</Text>
                </View>
                <View style={styles.bnkListName}>
                  <Text style={styles.bnkTitleItem}>Netflix</Text>
                  <Text style={styles.bnkDateItem}>Jun 12, 2021</Text>
                </View>
                <View style={styles.bnkValue}>
                  <Text style={styles.bnkCurrency}>R$ R$ -24,12</Text>
                  <Text style={styles.bnkCurrency}>R$ R$ -24,12</Text>
                </View>
              </View>
              <View style={styles.bnklistItem}>
                <View style={styles.bnkImg}>
                  <Text>M</Text>
                </View>
                <View style={styles.bnkListName}>
                  <Text style={styles.bnkTitleItem}>Netflix</Text>
                  <Text style={styles.bnkDateItem}>Jun 12, 2021</Text>
                </View>
                <View style={styles.bnkValue}>
                  <Text style={styles.bnkCurrency}>R$ R$ -24,12</Text>
                  <Text style={styles.bnkCurrency}>R$ R$ -24,12</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bnkFooter}>
            <TouchableOpacity style={styles.bnkFooterBtn}>
              <Text style={styles.bnkFooterBtnText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bnkFooterBtn}
              onPress={() => navigation.goBack()}>
              <Text style={styles.bnkFooterBtnText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

// Function Card Details
function CardsDetails() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.bnkContainer}>
      <View style={styles.bnkHeader}>
        <View style={styles.bnkAvatar}>
          <ProgressBar
            radius={55}
            progress={76}
            progressFontSize={30}
            strokeWidth={5}
            opacity={.1}
            showPercentSymbol={true}
            color='#7a59f6'
          />
        </View>
        <View style={styles.bnkTitle}>
          <Text style={styles.bnkTitleText}>Meu Cartão Credz VISA</Text>
          {/* <Text style={styles.bnkTitleBtn}>E</Text> */}
        </View>
      </View>
      <View style={styles.bnkBody}>
        <View style={styles.bnkBodyContent}>
          <View style={styles.bnkBodyItems}>
            <Text style={styles.bnkBodyText}>Limite:</Text>
            <Text style={styles.bnkBodyTextValue}>R$ 3.000,00</Text>
          </View>

          <View style={styles.bnkBodyItems}>
            <Text style={styles.bnkBodyText}>Disponível:</Text>
            <Text style={styles.bnkBodyTextValue}>R$ 512,32</Text>
          </View>
          <View style={styles.bnkBodyItems}>
            <Text style={styles.bnkBodyText}>Total faturas:</Text>
            <Text style={styles.bnkBodyTextValue}>R$ 2482,32</Text>
          </View>

          {/* <View style={styles.bar}>
            <Text style={styles.value}>100</Text>
            <ProgressLineBar
              progress={0.593}
              color='#9a89e6'
              style={styles.progressBar}
            />
            <Text style={styles.value}>500</Text>
          </View> */}

          {/* <View style={styles.bnkBodyItemsData}>
            <Text style={styles.bnkBodyText}>Dados Adicionais</Text>
            <Text style={styles.bnkBodyTextItem}>Nenhum</Text>
          </View> */}
          <View style={styles.bnkBodyList}>
            <Text style={styles.bnkBodyListTitle}>Últimas Transações</Text>
            <View style={styles.bnkBodyListContent}>
              <View style={styles.bnklistItem}>
                <View style={styles.bnkImg}>
                  <Text>M</Text>
                </View>
                <View style={styles.bnkListName}>
                  <Text style={styles.bnkTitleItem}>Netflix</Text>
                  <Text style={styles.bnkDateItem}>Jun 12, 2021</Text>
                </View>
                <View style={styles.bnkValue}>
                  <Text style={styles.bnkCurrency}>R$ R$ -24,12</Text>
                  <Text style={styles.bnkCurrency}>R$ R$ -24,12</Text>
                </View>
              </View>
              <View style={styles.bnklistItem}>
                <View style={styles.bnkImg}>
                  <Text>M</Text>
                </View>
                <View style={styles.bnkListName}>
                  <Text style={styles.bnkTitleItem}>Netflix</Text>
                  <Text style={styles.bnkDateItem}>Jun 12, 2021</Text>
                </View>
                <View style={styles.bnkValue}>
                  <Text style={styles.bnkCurrency}>R$ R$ -24,12</Text>
                  <Text style={styles.bnkCurrency}>R$ R$ -24,12</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bnkFooter}>
            <TouchableOpacity style={styles.bnkFooterBtn}>
              <Text style={styles.bnkFooterBtnText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bnkFooterBtn}
              onPress={() => navigation.goBack()}>
              <Text style={styles.bnkFooterBtnText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

//Function Tab Navigation
function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Bank"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#c1c1c2',
        style: {
          backgroundColor: '#8257E5'
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 13,
          fontWeight: 'bold'
        },
        indicatorStyle: {
          borderBottomColor: '#00ff0d',
          borderBottomWidth: 3,
        },
      }}>
      <Tab.Screen
        name="Banks"
        component={FirstScreen}
        options={{
          tabBarLabel: 'Bancos',
        }}
      />
      <Tab.Screen
        name="Cards"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Cartões',
        }}
      />

    </Tab.Navigator>
  )
}

// Header Function
export default function Account() {
  const { signOut } = useContext(AuthContext);

  function handleMenu() { }

  function handleSignOut() {
    signOut();
  }

  const navigation = useNavigation();

  return (

    <AppStack.Navigator>
      <AppStack.Screen name='Account'
        component={TabStack}
        options={{
          title: 'Contas',
          headerStyle: {
            backgroundColor: '#8257E5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 13,
            fontFamily: 'Archivo_700Bold',
            alignSelf: 'center'
          },
          headerLeft: () => (
            <View style={styles.touchLeft}>
              <Image style={styles.image} source={require('../../assets/img/logoC.png')} />
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={styles.touchableRight}
              onPress={() => navigation.navigate('EntryAccounts')}
            >
              <FontAwesome name='plus' size={23} color='#f9f9f9' />
            </TouchableOpacity>
          )
        }}
      />

      <AppStack.Screen
        name='BankDetails'
        component={BankDetails}
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
        name='CardsDetails'
        component={CardsDetails}
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
        name='EntryAccounts'
        component={FormAccount}
        options={{
          title: 'Entrada',
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

};

