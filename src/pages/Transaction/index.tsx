  import React, { ReactNode, useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import {FontAwesome} from '@expo/vector-icons'; 

import {
  Animated,
  Button,
  FlatList,
  I18nManager,
  Image,
  RefreshControl,
  ScrollView,
  Text, 
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import styles from './styles';

import AuthContext from '../../contexts/auth';
import { list } from './list';

import {RectButton, Swipeable} from 'react-native-gesture-handler';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

const AppStack = createStackNavigator();

const wait = (timeout: number) => {
  return new Promise(resolve => {
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


  const renderRightAction = (text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, color: any, x: any, progress: { interpolate: ( arg0: { inputRange: number[]; outputRange: any[]; } ) => any; }) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      close();
      alert(text);
    };
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

 
  const updateRef = (ref: any) => {
    const _swipeableRow = ref;

    return _swipeableRow;
  };
  const close = () => {
    close();
  };
  
  const RightAction = () =>  (
    <>
      <TouchableOpacity style={styles.rightAction}>
        <Text style={styles.textAction}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightAction}>
        <Text style={styles.textAction}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightAction}>
        <Text style={styles.textAction}>Pago</Text>
      </TouchableOpacity>
    </>
  )
  return(
    <View style={styles.container}>

      <View style={styles.date}>

      </View>
      
        <FlatList 
          data={list}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index})=>(
            <Swipeable
            ref={updateRef}
            friction={2}
            leftThreshold={30}
            rightThreshold={40}
            renderRightActions={RightAction}
            onSwipeableRightOpen={() => console.log('Opening...')}
            enableTrackpadTwoFingerGesture
            >
              <TouchableWithoutFeedback>
                <View style={styles.listItem} key={index}>
                  <View style={styles.img}>
                    <Text>{item.image}</Text>
                  </View>
                  <View style={styles.name}>
                    <Text style={styles.titleItem}>{item.title}</Text>
                    <Text style={styles.dateItem}>{item.date}</Text>
                  </View>
                  <View style={styles.value}>
                    <Text style={styles.currency}>R$ {item.value}</Text>
                    <Text style={styles.currency}>R$ {item.value}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Swipeable>
          )}

        />
    </View>
  )
}


// Header Function
export default function Transaction() {
  const {signOut} = useContext(AuthContext);

  function handleMenu() {}

  function handleSignOut() {
    signOut();
  }

  return (

    <AppStack.Navigator>
      <AppStack.Screen name='Transaction' 
        component={Screen}
        options={{
          title: 'Transações',
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
            >
              <FontAwesome name='ellipsis-v' size={23} color='#f9f9f9' />
          </TouchableOpacity>
          )
        }}
        />
    </AppStack.Navigator>

    
  );

};

