import { ENDPOINT } from 'constants/global';
import axiosClient from './axiosClient';

const authApi = {
    confirm: () => {

        return axiosClient.get(ENDPOINT.auth.confirm);
    },
    getAccessToken: (userForm) => {

        return axiosClient.post(ENDPOINT.auth.getAccessToken, userForm);
    },
    login: (userForm) => {

        return axiosClient.post(ENDPOINT.auth.login, userForm);
    },
    register: (userForm) => {

        return axiosClient.post(ENDPOINT.auth.register, userForm);
    },

};

export default authApi;
