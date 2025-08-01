import { configureStore } from '@reduxjs/toolkit'
import favSlice from './reducers/fav'
import cartSlice from './reducers/cart'
import api from '../services/api'

const store = configureStore({
  reducer: {
    fav: favSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
