import * as actionTypes from './userTypes.js'

const initialState = {
  userCache: {}
}

const UserReducer = ( state = initialState, action) => {
  let out = {}
  switch (action.type) {
    case actionTypes.USERS_FROM_CACHE:
      return state
    case actionTypes.USER_TO_CACHE:
      out = {}
      out = {...state}
      if (action.payload) out[action.payload._id] = action.payload
      return out
    case actionTypes.USERS_TO_CACHE:
      out = {}
      out = {...state}
      if (action.payload) action.payload.map((e) => {
        out[e._id] = e
      })
      return out
    default: return state
  }
}

export default UserReducer