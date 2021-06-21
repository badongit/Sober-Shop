import { ENDPOINT } from 'constants/global';
import axiosClient from "./axiosClient";

const cartApi = {
    add: (cartForm) => {

        return axiosClient.post(ENDPOINT.cart.add, cartForm);
    },
    getAll: () => {

        return axiosClient.get(ENDPOINT.cart.getAll);
    },
    updateMany: (cartForm) => {

        return axiosClient.put(ENDPOINT.cart.updateMany, cartForm);
    },
    
};

export default cartApi;