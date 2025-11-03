import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../thunk/thunk";

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default productSlice.reducer