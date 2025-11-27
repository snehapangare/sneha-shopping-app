import {createSlice} from '@reduxjs/toolkit';
import { getProductById ,getProduct} from '../actions';

const initialState={
    product:[],
    cart:[],
    loading:false,
    error:null,
    details:null
}
const productSlice=createSlice({
    name:'product',
    initialState,
    reducer:{
        addCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter(d=>d.id!==action.payload)
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(getProducts.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action)=>{
                state.loading = false;
                state.products= action.payload
            })
            .addCase(getProducts.rejected, (state)=>{
                state.loading = false;
                state.error = 'Failed to fetch the products!';
            })
            .addCase(getProductById.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductById.fulfilled, (state, action)=>{
                state.loading = false;
                state.details= action.payload
            })
            .addCase(getProductById.rejected, (state)=>{
                state.loading = false;
                state.error = 'Failed to fetch the product details!';
            })
    }
});

export const { addCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;