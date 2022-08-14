import { combineReducers } from 'redux';
import PostReducers from './postReducer';

const reducers = combineReducers({
	posts: PostReducers
});

export default (state, action) => reducers(state, action);
;