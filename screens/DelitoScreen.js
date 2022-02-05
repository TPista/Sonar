/*Pantalla de prueba, para borrar despues xd */


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

import useLocationPermisson from '../hooks/useLocationPermission';
import useUserCoordinates from '../hooks/useUserCoordinates';

const DelitoScreen = ({navigation}) => {
  const {user, logout}=useContext (AuthContext);

  const [userData, setUserData]= useState (null);

  const  {permissionResponse } = useLocationPermisson()

  const  {location, error} = useUserCoordinates(permissionResponse.status)
  
  console.log({location,error})

  const digitid = (size = 7) => {
    let digits = "0123456789";
    let id = "";
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    let i = size;
    while (i--) {
      // `| 0` is more compact and faster than `Math.floor()`.
      id += digits[(Math.random() * 10) | 0];
    }
    return id;
  };

  const crearDelito = () => {
    const reportId = digitid(20)
    firestore()
    .collection('delitos')
    .doc(reportId)
    .set({
      tipoDelito: userData.tipoDelito,
      reportId: reportId,
      descripcion: userData.descripcion,
      coordinates: location.coords,
      reporterId: user.uid
     
       })

       .then (() => {
        console.log('Delito agregado');
          
          navigation.goBack();
       })
    
    }

  return (
    <View style={styles.container}>
     
        <View style={{alignItems: 'center'}}>
        
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          Agregar Delito          </Text>
        </View>

        <View style={styles.action}>
          {/* <FontAwesome name="user-o" size={20} /> */}
          <TextInput
            placeholder="Titulo del Delito"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserData({...userData, tipoDelito: txt})}
            style={[styles.textInput ]}
          />
          
        </View>

        <View style={styles.action}>
          {/* <FontAwesome name="user-o" size={20} /> */}
          <TextInput
            placeholder="Descripcion del Delito"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserData({...userData, descripcion: txt})}
            style={[styles.textInput ]}
          />
          
        </View>
       
                   
        { Boolean(location?.coords) && <FormButton2 buttonTitle="Agregar" onPress= {crearDelito} /> }
        
      
    </View>
  );
};

export default DelitoScreen;

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