import {
    SETTOKEN, TOKEN_FUNCTION, USER_DATA, FETCH_LOADING_STATUS, GUEST, LOCATION_DATA
} from '../ActionTypes'
import InitialState from '../InitialState'

export const UserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GUEST:
            return {
                ...state,
                guest: action.payload
            }
        case FETCH_LOADING_STATUS:
            return {
                ...state,
                loading: action.payload
            }
        case SETTOKEN:
            return {
                ...state,
                token: action.payload
            }
        case TOKEN_FUNCTION:
            return {
                ...state,
                tokenfunc: action.payload
            }
        case USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case LOCATION_DATA:
            return {
                ...state,
                locationData: action.payload
            }
        default: return state;
    }
}