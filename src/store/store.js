import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './home/homeSlice'


export const store = configureStore({
  reducer: {
   // Aca puedes ir agregando todos tus reducer
   home: homeSlice
  },
})