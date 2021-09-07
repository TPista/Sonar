import React, {useState, useContext} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { useReducer } from 'react/cjs/react.production.min';

import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProvider';


const TelefonoScreen =({navigation})  => {
const {user, logout}=useContext (AuthContext);
return(
<View >
   
    <Text justifyContent='center' > Telefonos Utiles</Text>
    <FormButton buttonTitle="Logout" onPress={()=> logout()} />
    
    
    
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