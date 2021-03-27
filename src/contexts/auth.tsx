import React, { createContext, ReactNode, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../services/api'

interface AuthProviderNode {
  children: ReactNode;
}

interface AuthSignIn {
  email: string, 
  pass: string
}

interface AuthContextData {
  signed: boolean; 
  user: object | null;
  signIn: ({email, pass}: AuthSignIn) => Promise<void>;
  signOut(): void;
}



const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}:AuthProviderNode) {
  const [user, setUser] = useState<object | null>(null);

  useEffect(()=>{
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@CTKAuth:user');
      const storageToken = await AsyncStorage.getItem('@CTKAuth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser))
      }
    }

    loadStorageData();
  },[])

  const signIn = async ({email, pass}:AuthSignIn)=> {  
    const response = await api.post("/", {email, pass});
    setUser(response.data.user)

    console.log(response.data)

    await AsyncStorage.setItem('@CTKAuth:user', JSON.stringify(response.data.user));
    await AsyncStorage.setItem('@CTKAuth:token', response.data.token);
  }

  async function signOut(){
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;