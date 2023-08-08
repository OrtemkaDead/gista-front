import { combineReducers } from '@reduxjs/toolkit'

import SectionSlice from '../reducers/sections-reducer/sections-reducer'

const rootReducer = combineReducers({
  SectionSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
