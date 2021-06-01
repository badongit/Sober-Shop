import {createSlice} from '@reduxjs/toolkit'

const initialProduct = {
    productArr: []
}

const productSlice = createSlice ({
    name: 'products',
    initialState: initialProduct
    // extraReducers: {
    //     [initialProduct.pending]: (state) => {
    //         state.productLoading = true;
    //     },

    //     [initialProduct.rejected]: (state) => {
    //         state.productLoading = false;
    //     },

    //     [initialProduct.fullfilled]: (state) => {
    //         state.productLoading = false;
    //     },

    // }
})
const { reducer, actions } = productSlice;

export default reducer;
