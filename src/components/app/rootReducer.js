import { combineReducers } from 'redux';
import listToDosReducer from '../listToDo/listToDosReducer';

const rootReducer = combineReducers({
    toDos: listToDosReducer
});

export default rootReducer;