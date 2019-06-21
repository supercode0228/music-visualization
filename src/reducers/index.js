import { combineReducers } from 'redux';
import ControllerReducer from './controllerReducer';


export default combineReducers({
  controller: ControllerReducer,
});
