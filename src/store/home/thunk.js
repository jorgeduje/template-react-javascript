import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAnonInstance from "../../api/axiosInstance";

export const getData = createAsyncThunk(
    "getData",
    async (argument, thunkAPI) => {
      try {
        const res = await axiosAnonInstance.get("/data")
        .then( res => console.log(res))
        .catch( err => console.log(err))
        return res
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return thunkAPI.rejectWithValue(err.response.data.error_messages);
      }
    }
  );
