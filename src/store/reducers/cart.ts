import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type typeProduct = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type cartState = {
  cartProducts: typeProduct[]
}

const initialState: cartState = {
  cartProducts: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProductsCart: (state, action: PayloadAction<typeProduct[]>) => {
      state.cartProducts = action.payload
    }
  }
})

export const { setProductsCart } = cartSlice.actions
export default cartSlice.reducer
