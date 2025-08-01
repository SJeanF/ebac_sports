import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { typeProduct } from './cart'

type favState = {
  favItens: typeProduct[]
}

const initialState: favState = {
  favItens: []
}

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    setFavoriteItens: (state, action: PayloadAction<typeProduct[]>) => {
      state.favItens = action.payload
    }
  }
})

export const { setFavoriteItens } = favSlice.actions
export default favSlice.reducer
