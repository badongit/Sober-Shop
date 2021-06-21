import { ENDPOINT } from "constants/global";
import axiosClient from "./axiosClient";

const orderApi = {
    getOrderUser: () => {

        return axiosClient.get(ENDPOINT.order.getOrderUser);
    } ,
    getOrder: (id) => {
        const url = `${ENDPOINT.order.getOrder}/${id}`;
        
        return axiosClient.get(url);
    }
};

export default orderApi;