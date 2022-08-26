import { createStore,applyMiddleware,combineReducers} from 'redux'
import reducerFun from './count_reducer'

import user_reducer from './user_reducer'
import thunk from 'redux-thunk'

//单个
  // const store = createStore(reducerFun,applyMiddleware(thunk))
  // export default store;


  let allReducers=combineReducers({
    num:reducerFun,
    users:user_reducer
  })
  //多个
  const store = createStore(allReducers,applyMiddleware(thunk))
  export default store;
