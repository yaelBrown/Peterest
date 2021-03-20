import { combineReducers } from 'redux'

import homeReducer from './Reducers/homeReducer.js'
import dashboardReducer from './Reducers/dashboardReducer.js'

const rootReducer = combineReducers({
  home: homeReducer,
  dashboard: dashboardReducer
})

export default rootReducer
