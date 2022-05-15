import * as api from '../api';

// Action Creators: Redux thunk
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        dispatch({ type: 'FETCH_ALL', payload: [] })
    } catch (error) {
        console.log(error.message)
    }
} 
