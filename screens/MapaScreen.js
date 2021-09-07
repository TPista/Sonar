import React, {useState, useContext} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { useReducer } from 'react/cjs/react.production.min';

import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProvider';


const MapaScreen =({navigation})  => {
const {user, logout}=useContext (AuthContext);
return(
<View >
   
    <Text > AJUSTES DE PERFIL DE {user.email}</Text>
    <FormButton buttonTitle="Logout" onPress={()=> logout()} />
    
    
    
</View>
);
};

export default MapaScreen;
const styles = StyleSheet.create({

    containter: {
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    });