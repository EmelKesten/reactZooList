import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("animals", () => {
  return axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((response) => {
      return {response};
    })
    .catch((error) => {
      console.log(error);
    });
});

export const initialState = {
  user: {
    fetchData: [],
    loading: true,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.user.fetchData = action.payload;
    },
    setLoader: (state, action) => {
      state.user.loading = action.payload;
    }
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.user.fetchData = action.payload.response.data;
      state.user.loading = false;
    },
  },
});

export const { addData } = userSlice.actions;

export default userSlice.reducer;
