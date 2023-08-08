import rootReducer from '@/store/reducers/root-reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer,
})
export type AppDispatch = typeof store.dispatch
export default store
