import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("animals", () => {
  return axios
    .get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((response) => {
      return { response };
    })
    .catch((error) => {
      console.log(error);
    });
});

export const initialState = {
  appData: {
    animals: [],
    loading: true,
  },
};

export const userSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.appData.animals = action.payload;
    },
    setLoader: (state, action) => {
      state.appData.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.appData.animals = action.payload.response.data;
      state.appData.loading = false;
    },
  },
});

export const { addData } = userSlice.actions;

export default userSlice.reducer;
