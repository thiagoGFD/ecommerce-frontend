import { responseConstants } from '../constants';

export const response = (state = {}, action) => {
  switch (action.type) {
    case responseConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case responseConstants.ERROR:
      return {
        type: 'alert-error',
        message: action.message
      };
    case responseConstants.CLEAR:
      return {};
    default:
      return state
  }
}