// Add methods for api calls using axios here
import Axios, {AxiosResponse, AxiosError} from 'axios';
import querystring from 'querystring';

export function doGet(url, onSuccess, onFailure) {

    return Axios.get(url)
        .then((response) => {
            if (onSuccess) {
                onSuccess(response);
            }

            return response.data || {};
        })
        .catch((error) => {
            if (onFailure) {
                onFailure(error);
            }
        });
}

export const doPost = (url, data, successCallback, failureCallback) => {

    return Axios.post(url, querystring.stringify(data))
        .then((response) => {
            if (successCallback) {
                successCallback(response || '');
            }

            return response.data || {};
        })
        .catch((error) => {
            if (failureCallback) {
                failureCallback(error);
            }
        });
};