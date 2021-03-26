import { combineReducers } from 'redux'

import homeReducer from './Home/homeReducer.js'
import dashboardReducer from './Dashboard/dashboardReducer.js'

const rootReducer = combineReducers({
  home: homeReducer,
  dashboard: dashboardReducer
})

export default rootReducer
