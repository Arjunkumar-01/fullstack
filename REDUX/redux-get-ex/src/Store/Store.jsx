import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Slice/Slice";

const Store = configureStore({
    reducer : {
        "employees" : Slice
    }
});

export default Store;