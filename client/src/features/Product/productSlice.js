import {createSlice} from '@reduxjs/toolkit'

export const initialProduct= {
    productArr: [
        {
            name: "Red Hoodie",
            sale: "10",
            sold: "76",
            price: "300000",
            finalPrice: "260000",
            img: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_433/https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-2-433x516.jpg"
        },
        {
            name: "Red Hoodie",
            sale: "10",
            sold: "76",
            price: "300000",
            finalPrice: "260000",
            img: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_433/https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-2-433x516.jpg"
        },
        {
            name: "Red Hoodie",
            sale: "10",
            sold: "76",
            price: "300000",
            finalPrice: "260000",
            img: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_433/https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-2-433x516.jpg"
        },
        {
            name: "Red Hoodie",
            sale: "10",
            sold: "76",
            price: "300000",
            finalPrice: "260000",
            img: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_433/https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-2-433x516.jpg"
        },
        {
            name: "Red Hoodie",
            sale: "10",
            sold: "76",
            price: "300000",
            finalPrice: "260000",
            img: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_433/https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-2-433x516.jpg"
        },
    ]
}

const productSlice = createSlice ({
    name: 'products',
    initialState: {
        initialProduct,
        productLoading: true
    },
    extraReducers: {
        [initialProduct.pending]: (state) => {
            state.productLoading = true;
        },

        [initialProduct.rejected]: (state) => {
            state.productLoading = false;
        },

        [initialProduct.fullfilled]: (state) => {
            state.productLoading = false;
        },

    }
})

export default productSlice;