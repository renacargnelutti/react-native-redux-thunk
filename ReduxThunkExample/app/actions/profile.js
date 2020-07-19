
import AsyncStorage from '@react-native-community/async-storage';

import { STORAGE_PROFILE_DATA } from '../constants/storage';
import {
    GET_PROFILE_DATA,
    GET_PROFILE_DATA_SUCCESS,
    GET_PROFILE_DATA_FAILURE,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
} from '../constants/actions/profile';

export const getProfileData = () => (dispatch) => _getProfileData(dispatch);
const _getProfileData = async (dispatch) => {

    try {
        dispatch({ type: GET_PROFILE_DATA });

        let profileData = await AsyncStorage.getItem(STORAGE_PROFILE_DATA);
        if (typeof profileData === 'undefined' || !profileData) throw 'Profile data not found';

        let profile = JSON.parse(profileData);
        dispatch({ type: GET_PROFILE_DATA_SUCCESS, payload: { user: profile } });
    }
    catch (err) {
        dispatch({ type: GET_PROFILE_DATA_FAILURE });
    }

};

export const login = ({ username, password }) => (dispatch) => _login({ username, password }, dispatch);
const _login = async ({ username, password }, dispatch) => {

    try {
        dispatch({ type: USER_LOGIN });

        // TODO: go to API!
        let user = {
            username,
            name: 'John',
            lastName: 'Doe',
        };

        await AsyncStorage.setItem(STORAGE_PROFILE_DATA, JSON.stringify(user));

        dispatch({ type: USER_LOGIN_SUCCESS, payload: { user } });
    }
    catch (err) {
        dispatch({ type: USER_LOGIN_FAILURE });
    }

};
