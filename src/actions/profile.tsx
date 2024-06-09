import { Profile } from '../utils/types'
export const setProfileData = (data: Profile | null) => {
    return {
        type: 'SET_PROFILE_DATA',
        payload: data,
    }
}