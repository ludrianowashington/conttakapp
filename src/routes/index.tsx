import React, {useContext} from "react";

import AuthContext from '../contexts/auth'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  const {signed} = useContext(AuthContext)

  console.log(signed)
  return signed ? <AppRoutes/> : <AuthRoutes/> 
}