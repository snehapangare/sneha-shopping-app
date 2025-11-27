import {configureStore} from "@reduxjs/toolkit";
import Productlice from '/slice/productSlice';

export const store=configureStore({
    reducer:{
        catlogue:productReducer
    }
})