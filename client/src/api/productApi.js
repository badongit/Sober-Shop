import { ENDPOINT } from 'constants/global';
import axiosClient from './axiosClient';

const productApi = {
    getAll: () => {
        const url = '/product';
        return axiosClient.get(url);

    },

    show: (id) => {
        const url = `${ENDPOINT.product.show}/${id}`;

        return axiosClient.get(url);
    },
}

export default productApi;