import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { menuModel } from '../../pages/Home'

type CartState = {
  items: menuModel[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<menuModel>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    }
  }
})

export const { addItem, removeItem, openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer
