import { userConstants } from '../constants';

const initialState = {
    user: null
}
export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
            case userConstants.LOGIN_SUCCESS:
            return {
                user: action.user
            };
            case userConstants.LOGIN_FAILURE:
            return {};
            case userConstants.LOGOUT:
            return {};
            default:
            return state;
    }
}
