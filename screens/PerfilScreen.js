import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import FormButton from '../components/FormButton';
import FormButton2 from '../components/FormButton2';
import { useEffect } from 'react/cjs/react.development';








const PerfilScreen = () => {
    const {user, logout}=useContext (AuthContext);
    const [userData, setUserData]= useState (null);


    const getUser = async () => {
  
      const currentUser = await firestore()
    
      .collection('users')
      .doc(user.uid)
      .get()
      .then( (documentSnapshot) =>{
        if (documentSnapshot.exists) {
        console.log('User Data', documentSnapshot.data());
                setUserData(documentSnapshot.data());
        
      }
    })
    
    }
    
    const handleUpdate = () => {
    firestore()
    .collection('users')
    .doc(user.uid)
    .update({
      fname: userData.fname    
     
       })

       .then (() => {
        console.log('Usuario actualizado');
          Alert.alert('Se actualizo el Perfil');
       })
    
    }
    
    useEffect( () => {
      getUser();
    }, []);

  return (
    <View style={styles.container}>
     
        <View style={{alignItems: 'center'}}>
        
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          {user.email}           </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Nombre"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.fname : ''}
            onChangeText={(txt) => setUserData({...userData, fname: txt})}
            style={[styles.textInput ]}
          />
          
        </View>


        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Apellido"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput ]}
          />
          
        </View>
       

        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="DNI"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput ]}
          />
          
        </View>
                   
      
        <FormButton buttonTitle="Actualizar" onPress= {handleUpdate} />
      
    </View>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});