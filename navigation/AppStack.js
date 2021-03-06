import React from 'react';
 
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import MapaScreen from '../screens/MapaScreen';
import TelefonosScreen from '../screens/TelefonosScreen';


 
 const Stack = createStackNavigator();
 
 
 const AppStack = () => {
   
 
 return (
     
       <Stack.Navigator >
 
       <Stack.Screen 
       name = "Home" 
       component = {HomeScreen} 
       
       />

      <Stack.Screen 
       name = "Perfil" 
       component = {PerfilScreen} 
       
       />
        

      <Stack.Screen 
       name = "Mapa" 
       component = {MapaScreen} 
       
       /> 

      <Stack.Screen 
       name = "Telefonos" 
       component = {TelefonosScreen} 
       
       /> 

       </Stack.Navigator>
    
   );
 }
 
 
 export default AppStack;