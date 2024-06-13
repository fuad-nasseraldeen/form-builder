// src/reducers/profile.js
import { PROFILE_ERROR, SET_PROFILE_DATA } from '../actions/types'

const initialState = {}

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        ...payload,
      }

    case PROFILE_ERROR:
      return {
        ...state,
        profile: payload,
      }
    default:
      return state
  }
}

export default profileReducer
