import {createAsyncThunk} from "@reduxjs/toolkit";
import { getProductById,getProductsAPI } from "./services/productService";

export const getProducts=createAsyncThunk(
    'products/getProducts',
    async()=>{
        const data=await getProductsAPI();
        return data;
    }
)
export const getProductById=createAsyncThunk(
    'products/getProductById',
    async()=>{
        const data=await getProductByIdAPI();
        return data;
    }
)