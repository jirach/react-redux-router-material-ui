import {combineReducers} from 'redux';
import building from './buildingReducer';
import room from './roomReducer';

const rootReducer = combineReducers({
  building,
  room
});

export default rootReducer;
