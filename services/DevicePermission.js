import {check, request, RESULTS} from 'react-native-permissions';

/**
 * @param {String} permissionName - extract permission name from permission string constant.
 * ex: "PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE" => "write_external_storage"
 * @return {String}
 */
const extractPermissionName = permissionName => {
    const strArray = String(permissionName).split('.');
    const name = strArray[2];
    return name.toLocaleLowerCase();
};

class DevicePermission {
    /**
     *  Request  device permission - function open permission request popup
     * @param {String} permission - Device permision name
     * @param {Function} onSuccess - Success callback function. Receive {permission,status} object
     *  parameter
     * @param {Function} onFailure - Failure callback function. receive error message as parameter
     * @return {Promise}
     */
    static requestPermission(permission, onSuccess, onFailure) {
        request(permission)
            .then(result => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        onSuccess &&
                            onSuccess({
                                permission: extractPermissionName(permission),
                                status: RESULTS.UNAVAILABLE,
                            });
                        break;
                    case RESULTS.DENIED:
                        onSuccess &&
                            onSuccess({
                                permission: extractPermissionName(permission),
                                status: RESULTS.DENIED,
                            });
                        break;
                    case RESULTS.GRANTED:
                        onSuccess &&
                            onSuccess({
                                permission: extractPermissionName(permission),
                                status: RESULTS.GRANTED,
                            });
                        break;
                    case RESULTS.BLOCKED:
                        onSuccess &&
                            onSuccess({
                                permission: extractPermissionName(permission),
                                status: RESULTS.BLOCKED,
                            });
                        break;
                }
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    }

    /**
     *  Check device permission status
     * @param {String} permission - Device permision name
     * @param {Function} onSuccess - Success callback function. Receive {permission,status} object
     *  parameter
     * @param {Function} onFailure - Failure callback function. receive error message as parameter
     * @return {Promise}
     */
    static checkPermission(permission, onSuccess, onFailure) {
        check(permission)
            .then(result => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        onSuccess &&
                            onSuccess({
                                permission: extractPermissionName(permission),
                                status: RESULTS.UNAVAILABLE,
                            });
                        break;
                    case RESULTS.DENIED:
                        onSuccess &&
                            onSuccess({
                                permission: extractPermissionName(permission),
                                status: RESULTS.DENIED,
                            });
                        break;
                    case RESULTS.GRANTED:
                        onSuccess &&
                            onSuccess({
                                permission: extractPermissionName(permission),
                                status: RESULTS.GRANTED,
                            });
                        break;
                    case RESULTS.BLOCKED:
                        onSuccess &&
                            onSuccess({
                                permission: extractPermissionName(permission),
                                status: RESULTS.BLOCKED,
                            });
                        break;
                }
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    }
}

export default DevicePermission;