import { userToStore } from '../Actions/homeActions.js'
import * as actionTypes from '../Actions/homeActions.js'

const initialState = {
  user: {},
  friends: [],
  options: {},
  notifications: [],
  feed: []
}

const HomeReducer = ( state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_TO_STORE: 
      return {
        ...state,
        user: action.user
      }
    case actionTypes.USER_FROM_STORE:
      return {
        ...state,
        user: {}
      }
    default: return state
  }
}

export default HomeReducer