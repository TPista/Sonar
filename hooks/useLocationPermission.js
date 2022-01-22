import { PERMISSIONS } from "react-native-permissions";
import DevicePermission from "../services/DevicePermission";

import { useState, useEffect } from "react";

const useLocationPermisson = () => {
  const [permissionResponse, setPermissionResponse] = useState({});
  const [permissionError, setPermissionError] = useState(undefined);

  function requestLocationPermission() {
    const onSuccess = (response) => {
      const { status, permission } = response;

      setPermissionResponse(response);
    };

    const onFailure = (error) => {
      setPermissionError(error);
    };

    DevicePermission.requestPermission(
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      onSuccess,
      onFailure
    );
  }

  useEffect(() => {
    requestLocationPermission();
  }, []);
  return { permissionResponse, permissionError };
};


export default useLocationPermisson