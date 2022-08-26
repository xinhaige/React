import { createStore } from 'redux'
import reducerFun from './count_reducer'

  const store = createStore(reducerFun)
  export default store;