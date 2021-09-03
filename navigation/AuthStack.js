 import React from 'react';
  
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 
 import LoginScreen from '../screens/LoginScreen';
 import SignupScreen from '../screens/SignupScreen';
 
 const AppStack = createStackNavigator();
 
 
 
 
 const AuthStack = () => {
   
 
 return (
     
       <AppStack.Navigator screenOptions={{
     headerShown: false
   }} >
 
       <AppStack.Screen 
       name = "Login" 
       component = {LoginScreen} 
       options= {{header:()=> null}}
       />
        

        <AppStack.Screen 
       name = "Signup" 
       component = {SignupScreen} 
       options= {{header:()=> null}}
       />
        
       </AppStack.Navigator>
    
   );
 }
 
 
 export default AuthStack;