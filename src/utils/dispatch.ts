import { useDispatch } from 'react-redux'
import { setProfileData } from '../actions/profile.tsx'
import { Profile } from './types.tsx'
// Define dispatch function within a functional component
const useCustomDispatch = () => {
    const dispatch = useDispatch()

    const customDispatch = (updateData: Profile | null) => {
        dispatch(setProfileData(updateData))
    }

    return customDispatch;
}

export default useCustomDispatch
