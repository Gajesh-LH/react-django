// Add methods for api calls using axios here
import Axios, {AxiosResponse, AxiosError} from 'axios';

export function doGet(url, onSuccess, onFailure) {

    return Axios.get(`http://127.0.0.1:8000${url}`)
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

    return Axios.post(`http://127.0.0.1:8000${url}`, data)
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