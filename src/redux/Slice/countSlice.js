import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: {
        timer: 3,
    },
    reducers: {
        addTimer: (state) => {
            state.timer += 1;
        },
        decrement: (state) => {
            state.timer -= 1
        }
    }
})

export const {addTimer, decrement} = countSlice.actions;
export default countSlice.reducer;