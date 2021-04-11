import { combineReducers } from 'redux'

import homeReducer from './Home/homeReducer.js'
import dashboardReducer from './Dashboard/dashboardReducer.js'
import userReducer from './Users/userReducer.js'

const rootReducer = combineReducers({
  home: homeReducer,
  users: userReducer,
  dashboard: dashboardReducer
})

export default rootReducer
