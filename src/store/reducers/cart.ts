import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { menuModel } from '../../pages/Home'

type CartState = {
  items: menuModel[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<menuModel>) => {
      state.items.push(action.payload)
    }
  }
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer
