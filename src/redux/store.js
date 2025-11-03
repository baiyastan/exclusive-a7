import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Slice/countSlice"
import categoryReducer from "./Slice/categorySlice"
import productReducer from "./Slice/productSlice"

const myStore = configureStore({
    reducer: {
        count: countReducer,
        category: categoryReducer,
        product: productReducer,
    }
})

export default myStore