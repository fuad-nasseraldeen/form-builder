// src/reducers/profile.js
import { PROFILE_ERROR, SET_PROFILE_DATA } from '../actions/types'

const initialState = {
  profile: [],
}

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        profile: payload,
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
