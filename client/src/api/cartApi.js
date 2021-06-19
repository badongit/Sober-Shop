import { ENDPOINT } from 'constants/global';
import axiosClient from "./axiosClient";

const cartApi = {
    add: (cartForm) => {

        return axiosClient.post(ENDPOINT.cart.add, cartForm);
    },

};

export default cartApi;