import React, {useState, useContext} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import { AuthContext } from '../navigation/AuthProvider';

import AntDesign from 'react-native-vector-icons/AntDesign';


const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
  
    const {register}= useContext(AuthContext);
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Crear una cuenta</Text>
  
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
  
        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Contraseña"
          iconType="lock"
          secureTextEntry={true}
        />
  
       {/*  <FormInput
          labelValue={confirmPassword}
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
          placeholderText="Confirmar Contraseña"
          iconType="lock"
          secureTextEntry={true}
        /> */}
  
        <FormButton
          buttonTitle="Registrarse"
          onPress={() => register(email, password)}
        />
  
        {/* <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
           Al registrarse, usted confirma estar de acuerdo con{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terminos OK!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms of service
            </Text>
          </TouchableOpacity > 
          
          <Text style={styles.color_textPrivate}> and </Text>

          <TouchableOpacity onPress={() => alert('Privacidad OK!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>

          </TouchableOpacity >
        </View> */}
  
        {/* {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Registrarse con Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {}}
            />
      
            <SocialButton
              buttonTitle="Registrarse con Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {}}
            />
          </View>
        ) : null} */}
  
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Ya tiene una cuenta? Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SignupScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
  });