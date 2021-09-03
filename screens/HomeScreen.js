import React, {useContext} from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { useReducer } from 'react/cjs/react.production.min';

import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProvider';


const HomeScreen =()  => {
const {user, logout}=useContext (AuthContext);
return(
<View style={styles.containter}>
   
    <Text justifyContent= "center"> BIENVENIDO {user.email}</Text>
    <FormButton buttonTitle="Logout" onPress={()=> logout()} />
    <FormButton buttonTitle="Logout" onPress={()=> logout()} />
    
    
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