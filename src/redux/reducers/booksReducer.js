import { SELECT_BOOK } from '../actions/actionTypes';

export const initialState = {
	specificBook: undefined,
	noResult: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case `${SELECT_BOOK}_FULFILLED`:
			return {
				...state,
				specificBook: action.payload.data
			};
		case `${SELECT_BOOK}_PENDING`:
			return {
				...state,
				noResult: false
			};
		case `${SELECT_BOOK}_REJECTED`:
			return {
				...state,
				noResult: true
			};
		default:
			return state;
	}
};

export default reducer;
