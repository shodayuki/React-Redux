import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { visibleFilterReducer } from './visibleFilterReducer';

const rootReducer = combineReducers({
	todos: todoReducer,
	visibleFilter: visibleFilterReducer
});

export default rootReducer;