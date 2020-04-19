import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import booksReducer from './booksReducer';

export default combineReducers({
	searchReducer,
	booksReducer
});
