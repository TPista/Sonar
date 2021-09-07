import React from 'react';
 
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/HomeScreen';

 
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
        
       </Stack.Navigator>
    
   );
 }
 
 
 export default AppStack;