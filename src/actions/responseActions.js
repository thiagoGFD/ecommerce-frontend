import { responseConstants } from '../constants';

const success = (message) => {
    return { type: responseConstants.SUCCESS, message };
}

const error = (message) => {
    return { type: responseConstants.ERROR, message };
}

const clear = () => {
    return { type: responseConstants.CLEAR };
}

export const responseActions = {
    success,
    error,
    clear
};