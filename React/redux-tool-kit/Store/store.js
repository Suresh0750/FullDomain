import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../slice/countSlice";

const store = configureStore({
    reducer : {
        user : countSlice
    }
})


export default store