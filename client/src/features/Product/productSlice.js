import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import productApi from 'api/productApi'


export const getAllProduct = createAsyncThunk('product/getAllProduct', async (params, thunkAPI) => {
    const productData = await productApi.getAll();

    if (productData.success) {
        thunkAPI.dispatch(initProduct(productData.data));
    }

    return productData;
});

export const getProductById = createAsyncThunk('product/getProductById', async (productId, thunkAPI) => {
    const productData = await productApi.getById(productId);

    return productData;
});

const initialProduct = {
    productArr: [],
    productLoading: true,
}

const productSlice = createSlice ({
    name: 'product',
    initialState: initialProduct,
    reducers: {
        initProduct: (state, action) => {
            state.productArr = action.payload;
        }
    },
    extraReducers: {
        [getAllProduct.pending]: (state) => {
            state.productLoading = true;
        },
        [getAllProduct.rejected]: (state) => {
            state.productLoading = false;
        },
        [getAllProduct.fulfilled]: (state) => {
            state.productLoading = false;
        }
    }
})
const { reducer, actions } = productSlice;

export const { initProduct } = actions;
export default reducer;
