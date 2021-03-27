import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Forgot from '../pages/Forgot'

const AuthStack = createStackNavigator();

  export default function AuthRoutes() {
  return(
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name='SignIn' component={SignIn}/>
      <AuthStack.Screen name='SignUp' component={SignUp}/>
      <AuthStack.Screen name='Forgot' component={Forgot}/>
    </AuthStack.Navigator>
  );
}