import React, {useContext, useState} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

import AntDesign from 'react-native-vector-icons/AntDesign';


const LoginScreen =({navigation})  => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login} = useContext (AuthContext);

return(
<View style={styles.containter}>

        <Image style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        source= {require('../assets/sonar.png')}

        />


    
    <Text style={styles.text}> Login SONAR </Text>
    
    
    <FormInput
        labelValue={email}
        onChangeText= {(userEmail) => setEmail(userEmail)}
        placeholderText= "Email"
        iconType= "user"
        keyboardType= "email-address"
        autoCorrect= {false}
    />


    <FormInput
        labelValue={password}
        onChangeText= {(userPassword) => setPassword(userPassword)}
        placeholderText= "Contraseña"
        iconType= "lock"
        secureTextEntry={true}
    />

    <FormButton
        buttonTitle= "Ingresar"
        onPress={()=> login(email, password)}
        />


{/* {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Iniciar Sesion con Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() =>{ }}
          />

          <SocialButton
            buttonTitle="Iniciar Sesion con Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null} */}



    <TouchableOpacity onPress= {() => navigation.navigate('Signup')}>
        <Text style={{
            fontSize: 21,
            fontWeight: '500',
            color: '#2e64e5',
            fontFamily: 'Lato-Regular'
          }}> Crear cuenta</Text>
    </TouchableOpacity>
    
    {/* <TouchableOpacity onPress={()=> alert('reset contraseña')}>
        <Text> Olvidaste contraseña?</Text>
    </TouchableOpacity> */}

</View>
);
};

export default LoginScreen;

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

