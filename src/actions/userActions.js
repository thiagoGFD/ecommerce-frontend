import { userConstants } from '../constants';
import userService from '../services/UserService';
import { responseActions } from './responseActions';

const login = (username, password) => {
    const request = (user) => {
        return { type: userConstants.LOGIN_REQUEST, user }
    };
    const success = (user) => {
        return { type: userConstants.LOGIN_SUCCESS, user }
    };
    const failure = (user) => {
        return { type: userConstants.LOGIN_FAILURE, user }
    };

    return dispatch => {
        dispatch(request({username}));

        userService.signIn(username, password).then(({data}) => {
            dispatch(success(data));
        })
        .catch(error => {
            dispatch(failure(error));
            dispatch(responseActions.error(error));
        });
    }
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

export const userActions = {
    login,
    logout
}