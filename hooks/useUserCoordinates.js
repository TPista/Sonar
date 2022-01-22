import { RESULTS } from "react-native-permissions";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const useUserCoordinates = (permissionStatus) => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState(undefined);

  const getUserLocation = (permissionStatus) => {
    if (permissionStatus !== RESULTS.GRANTED) {
     return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => {
        Alert.alert(
          "Error",
          JSON.stringify("Sorry, something went wrong", error)
        );
        setError(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    getUserLocation(permissionStatus);
  }, [permissionStatus]);

  return { location, error };
};

export default useUserCoordinates;