import React, {useState, useContext, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Component} from 'react';
import { useReducer } from 'react/cjs/react.production.min';
import useLocationPermisson from '../hooks/useLocationPermission';
import useUserCoordinates from '../hooks/useUserCoordinates';

import useCrimeReportChanges from '../hooks/useCrimeReportsChanges';

import MapView, { Marker } from "react-native-maps";

const sanitizeReportData = (rawReportData) =>{

  // 1. Filter only report with coordinates
  
  let sanitizedData = rawReportData.filter(report=> Boolean(report.coordinates))
  
  return sanitizedData
  
  }

  
const App = () => {
  const newReport = useCrimeReportChanges()

  const [marker, setMarker] = useState([]);


  const [reports, setReports]  = useState([])

  useEffect(()=>{ setReports(sanitizeReportData([...reports,newReport]))
  
  },[newReport.tipoDelito])
  


  const handleNewMarker = (coordinate) => {
    setMarker([...marker, coordinate]);
  };

  return (
    <View style={styles.container}>
      <MapView
        onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
        style={styles.map}
        initialRegion={{
          latitude: 37.42597730214824,
          longitude: -122.0856026405,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        loadingEnabled
        mapType="terrain"
      >
         {reports.length > 0 &&
          reports.map((report) => {

            const coordinate = report.coordinates


            return (
              <Marker coordinate={coordinate} key={Math.random().toString()} />
            );
          })}

      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  map: {
    flex: 1,
  },
});

export default App;