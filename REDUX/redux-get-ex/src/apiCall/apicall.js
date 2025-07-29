import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const apiCall = createAsyncThunk("employees", async ()=>{
    return await axios.get("https://reqres.in/api/users?page=2");
});

export default apiCall;