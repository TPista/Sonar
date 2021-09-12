import React, {useContext} from 'react';
import { Image,View, Text, StyleSheet} from 'react-native';

import { useReducer } from 'react/cjs/react.production.min';

import FormButton from '../components/FormButton';
import FormButton2 from '../components/FormButton2';

import { AuthContext } from '../navigation/AuthProvider';


const HomeScreen =({navigation})  => {
const {user, logout}=useContext (AuthContext);
return(
<View style={styles.containter}>

    <Image align="right" source= {require('../assets/sonar.png')} />

    <Text justifyContent= "center"> BIENVENIDO {user.email}</Text>

    <FormButton buttonTitle="IR AL MAPA" onPress= {() => navigation.navigate('Mapa')} />

    <FormButton buttonTitle="Telefonos" onPress= {() => navigation.navigate('Telefonos')} />

    <FormButton buttonTitle="Ajustes" onPress= {() => navigation.navigate('Perfil')} />

    <FormButton2 buttonTitle="Logout" onPress={()=> logout()} />
    
</View>
);
};

export default HomeScreen;

const styles = StyleSheet.create({

containter: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'center'
},
});