
 import  { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts=createAsyncThunk('products',
    // createAsyncThunk('products/fetchProducts', )

    async () => { 
    const resp = await fetch('https://api.escuelajs.co/api/v1/products');
    const jsonResp = await resp.json();
    return jsonResp;
})
const initialState={
    items:[],
    status:undefined,
    error:null
} 
  const productSlice = createSlice({
    name:'productsSlice',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.status='succeeded';
            state.items=action.payload
        } )  
    }
})
export default productSlice.reducer