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

// src/reducers/profile.js
import { PROFILE_ERROR, SET_PROFILE_DATA } from '../actions/types'

const initialState = {
  data: {}, // or [] if profile is expected to be an array initially
  error: null,
}

// const profileReducer = (state = initialState, action) => {
//   const { type, payload } = action
//   switch (type) {
//     case SET_PROFILE_DATA:
//       return {
//         ...state,
//         data: payload,  // assuming payload contains the new profile data
//         error: null,    // reset error on successful data fetch
//       }

//     case PROFILE_ERROR:
//       return {
//         ...state,
//         error: payload, // update state with the error payload
//       }

//     default:
//       return state
//   }
// }

// export default profileReducer
