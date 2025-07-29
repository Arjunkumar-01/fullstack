import apiCall from "../apiCall/apicall";
import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    "name": "employees-slice",
    "initialState" : {
        loading : false,
        result : {},
        error : ""
    },

    "extraReducers" : (builder)=>{
        builder.addCase(apiCall.pending ,(state, action)=>{
            state.loading = false;
            state.result = {};
            state.error = "";
        });

        builder.addCase(apiCall.fulfilled, (state, action)=>{
            state.loading = true;
            state.res = action.payload;
            state.error = "";
        });
        
        builder.addCase(apiCall.rejected, (state, action)=>{
            state.loading = true;
            state.result = {};
            state.error = action.error.message;
        });
    }
});

export default Slice.reducer;