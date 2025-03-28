import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from  "./boardsSlice";

const store = configureStore({
    reducer : {
        //redux slices
        boards : boardsSlice.reducer
    }
})

export default store