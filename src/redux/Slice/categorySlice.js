import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../thunk/thunk";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default categorySlice.reducer