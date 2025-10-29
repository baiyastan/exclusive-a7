import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Slice/countSlice"

const myStore = configureStore({
    reducer: {
        count: countReducer,
    }
})

export default myStore