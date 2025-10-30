import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Slice/countSlice"
import categoryReducer from "./Slice/categorySlice"

const myStore = configureStore({
    reducer: {
        count: countReducer,
        category: categoryReducer,
    }
})

export default myStore