import {
    LOCATION_DATA, TOKEN_FUNCTION, SETTOKEN, USER_DATA, FETCH_LOADING_STATUS,
    APP_STATE, GUEST
} from '../ActionTypes'

export const changeTokenValue = (data) => {
    return { type: SETTOKEN, payload: data }
};
export const setTokenFunction = (data) => {
    return { type: TOKEN_FUNCTION, payload: data }
};
export const setUserInfo = data => {
    return { type: USER_DATA, payload: data }
};
export const loadingStatus = data => {
    return { type: FETCH_LOADING_STATUS, payload: data }
};
export const setAppState = data => {
    return { type: APP_STATE, payload: data }
};
export const setGuest = data => {
    return { type: GUEST, payload: data }
};
export const setLocationFunction = data => {
    return { type: LOCATION_DATA, payload: data }
};
