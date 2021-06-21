import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/Product/productSlice'
import authReducer from 'features/Auth/authSlice';

const rootReducer = {
    products: productReducer,
    auth: authReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store;