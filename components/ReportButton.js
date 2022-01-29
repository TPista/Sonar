// import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; 
import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';

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
  {/* <MaterialIcons name="report" size={24} color="white" /> */}
    </TouchableOpacity>
    
      )
    }
    export default ReportButton;