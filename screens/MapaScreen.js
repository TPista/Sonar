import React, {useState, useContext} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { useReducer } from 'react/cjs/react.production.min';

import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProvider';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



export default () => (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: -34.6146,
          longitude: -58.4414,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
 );


 const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 900,
      width: 600,
      justifyContent: 'center',
      alignItems: 'baseline',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });