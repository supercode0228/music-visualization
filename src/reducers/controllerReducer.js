import { CHANGE_CONTROLLER } from '../actions/types';

const INITIAL_STATE = {
  page: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CONTROLLER:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};
