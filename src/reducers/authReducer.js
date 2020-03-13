import { userConstants } from '../constants';

const initialState = {
    user: null
}
const fakeUserREMOVEME = {
    firstName:'Monique',
    token:'7b54adc5-1604-4254-83b3-0047b3934a03'
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
