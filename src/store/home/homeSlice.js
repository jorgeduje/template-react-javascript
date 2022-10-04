import { createSlice } from '@reduxjs/toolkit'
import {  getData } from './thunk'

const initialState = {
  data: []
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getData.fulfilled.type]: (state, action) => {
    },
    [getData.pending.type]: (state, action) => {
    },
    [getData.rejected.type]: (state, action) => {
    },
  }
})

// Action creators are generated for each case reducer function
export const {  } = homeSlice.actions

export default homeSlice.reducer