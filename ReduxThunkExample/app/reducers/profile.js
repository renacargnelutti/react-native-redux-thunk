
import {
    GET_PROFILE_DATA,
    GET_PROFILE_DATA_SUCCESS,
    GET_PROFILE_DATA_FAILURE,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
} from '../constants/actions/profile';

const initialState = {
    status: 'unknown',
    user: null,
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE_DATA: {
            return {
                ...state,
                status: 'loading',
            };
        }
        case GET_PROFILE_DATA_SUCCESS: {
            return {
                ...state,
                status: 'success',
                user: action.payload.user,
            };
        }
        case GET_PROFILE_DATA_FAILURE: {
            return {
                ...state,
                status: 'failure',
            };
        }
        case USER_LOGIN: {
            return {
                ...state,
                status: 'logging',
            };
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                status: 'success',
                user: action.payload.user,
            };
        }
        case USER_LOGIN_FAILURE: {
            return {
                ...state,
                status: 'failure',
            };
        }
        default:
            return state;
    }
};

export default profileReducer;
