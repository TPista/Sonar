import React, {useState, useContext} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Linking } from "react-native";

import { useReducer } from 'react/cjs/react.production.min';

import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProvider';


const TelefonoScreen =({navigation})  => {
const {user, logout}=useContext (AuthContext);

const handleCallPress = () =>{
    Linking.openURL("tel:911");

};
const handlePoliceCallPress = () =>{
    Linking.openURL("tel:101");

};
const handleBomberCallPress = () =>{
    Linking.openURL("tel:100");
};
return(
<View >
   
    <Text justifyContent='center' > Telefonos Utiles</Text>
    <FormButton buttonTitle="911" onPress={handleCallPress} />
    <FormButton buttonTitle="Policia" onPress={handlePoliceCallPress} />
    <FormButton buttonTitle="Bomberos" onPress={handleBomberCallPress} />    
    
    
</View>
);
};

export default TelefonoScreen;

const styles = StyleSheet.create({

    containter: {
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    });