import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";


export const getCategory = createAsyncThunk(
    "fetct/category",
    async (_, {rejectWithValue}) => {
        try {
            const res = await apiClient.get("/products/category-list")
            return res.data
        } catch (error) {
            return rejectWithValue(error.message || "not found")
        }
    }
)