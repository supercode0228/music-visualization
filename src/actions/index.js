import { CHANGE_CONTROLLER } from './types';

export const changeController = (page) => (dispatch) => {
  dispatch({
    type: CHANGE_CONTROLLER,
    payload: page,
  });
};
