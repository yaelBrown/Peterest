import { userToStore } from '../Actions/homeActions.js'

const initialState = {}

const HomeReducer = ( state = initialState, action) => {
  switch (action.type) {
    case "USER_TO_STORE": 
      return true
    default: return state
  }
}

export default HomeReducer