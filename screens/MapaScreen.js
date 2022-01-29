import React, {useState, useContext, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {Component} from 'react';
import { useReducer } from 'react/cjs/react.production.min';
import useLocationPermisson from '../hooks/useLocationPermission';
import useUserCoordinates from '../hooks/useUserCoordinates';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import useCrimeReportChanges from '../hooks/useCrimeReportsChanges';

import { AuthContext } from '../navigation/AuthProvider';


import MapView, { Marker } from "react-native-maps";
import { Callout } from 'react-native-maps';


const sanitizeReportData = (rawReportData) =>{

  // 1. Filter only report with coordinates
  
  let sanitizedData = rawReportData.filter(report=> Boolean(report.coordinates))
  
  return sanitizedData
  
  }

  
  const handleReportDelete = (report, user) =>{
    if(report.reporterId === user.uid){
  return  Alert.alert(
      "Do you want to delete this report",
      report.description,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
        text:"Confirm Delete",
        onPress: () => console.log("Deleting ....")
         
      }
      ]  
    );
  
    }
  
  }
  
  
  
const App = ({navigation}) => {
  const {user, logout}=useContext (AuthContext);
  const [userData, setUserData]= useState (null);

  const  ReportButton = ({onPress})=>{


    const styles = StyleSheet.create({container:{
      width:40,
      height:40,
      borderRadius:40/2,
      backgroundColor: "black",
      justifyContent:"center",
      alignItems:"center"
    }})
    
      return (
    
    <TouchableOpacity style={styles.container} onPress={onPress && onPress}>
  <MaterialIcons name="report" size={24} color="white" />
    </TouchableOpacity>
    
      )
    }


    const  DeleteButton = ({onPress})=>{


      const styles = StyleSheet.create({container:{
        width:40,
        height:40,
        borderRadius:40/2,
        backgroundColor: "black",
        justifyContent:"center",
        alignItems:"center"
      }})
      
        return (
      
      <TouchableOpacity style={styles.container} onPress={onPress && onPress}>
    <MaterialIcons name="report" size={24} color="white" />
      </TouchableOpacity>
      
        )
      }



  const newReport = useCrimeReportChanges()

  const [marker, setMarker] = useState([]);


  const [reports, setReports]  = useState([])

  useEffect(()=>{ setReports(sanitizeReportData([...reports,newReport]))
  
  },[newReport.tipoDelito])
  console.log(reports)


  const handleNewMarker = (coordinate) => {
    setMarker([...marker, coordinate]);
  };




  return (
    
    <View style={styles.container}>

      <View style={{position:"absolute", right:20,bottom:40, zIndex: 1000}}>
<ReportButton onPress= {() => navigation.navigate('Nuevo Delito')}/>

</View>
      <MapView
        onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
        style={styles.map}
        initialRegion={{
          latitude: -34.6063671724,
          longitude: -58.4357643127,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        showsUserLocation
        loadingEnabled
        mapType="terrain"
      >
        
         {reports.length > 0 &&
          reports.map((report) => {

            const coordinate = report.coordinates
           
              const markerCoordinate = {
              latitude:coordinate.latitude,
              longitude:coordinate.longitude
}
            


            return (
              <Marker coordinate={markerCoordinate} key={Math.random().toString()} >
                <Callout onPress = {({}) => handleReportDelete(report,user)}>

                    <Text> { report.tipoDelito}</Text>
                    <Text> { report.descripcion}</Text>
                  
                </Callout>

              </Marker>
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