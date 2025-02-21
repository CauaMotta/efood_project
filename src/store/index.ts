import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './reducers/Restaurants'

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
