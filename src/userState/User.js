import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  user: {
    fetchData: []
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addData: (state,action) => {
      state.user.fetchData = action.payload
    },
  },
})


export const { addData } = userSlice.actions

export default userSlice.reducer