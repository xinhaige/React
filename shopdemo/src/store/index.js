import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './action'
import userReducer from './userAction'

let store=configureStore({
    reducer: {
        counter:counterReducer,
        user:userReducer
    }
  })
export default store