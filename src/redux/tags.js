import { data } from 'constants/data'


export const FETCH_REQUESTED = 'FETCH_REQUESTED'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'


export const fetchTags = () => {
  return dispatch => {
    dispatch({
      type: FETCH_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: data
      })
    }, 2000)
  }
}


const initialState = {
  data: [],
  isLoading: false
}


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }

    default:
      return state
  }
}
