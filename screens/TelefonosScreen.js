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

const handleSameCallPress = () =>{
    Linking.openURL("tel:107");
};

return(
<View >
   
    <Text  style={styles.text}> Telefonos Utiles</Text>
    <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        source= {require('../assets/Same_3.png')}

        />
    <FormButton buttonTitle="SAME" onPress={handleSameCallPress} /> 

    <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        source= {require('../assets/pcba.png')}

        />

    <FormButton buttonTitle="Policia" onPress={handleCallPress} />

    <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        source= {require('../assets/bomberos.png')}

        />

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
    
        text: {
              fontFamily: 'Kufam-SemiBoldItalic',
              fontSize: 28,
              marginBottom: 10,
              color: '#051d5f',
              justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
    },
    });