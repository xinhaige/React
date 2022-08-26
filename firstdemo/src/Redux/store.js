import { createStore,applyMiddleware} from 'redux'
import reducerFun from './count_reducer'

import thunk from 'redux-thunk'
  const store = createStore(reducerFun,applyMiddleware(thunk))
  export default store;