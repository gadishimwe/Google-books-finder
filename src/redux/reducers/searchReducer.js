import { SEARCH, SUGGEST, CLEAR_SUGGESTIONS, PAGINATE } from '../actions/actionTypes';

export const initialState = {
	books: [],
	suggestions: [],
	totalItems: undefined,
	url: undefined
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case `${SEARCH}_FULFILLED`:
			return {
				...state,
				books: action.payload.data.totalItems !== 0 ? [...action.payload.data.items] : [],
				totalItems: action.payload.data.totalItems,
				url: action.payload.request ? action.payload.request.responseURL : undefined
			};
		case `${SEARCH}_PENDING`:
			return {
				...state
			};
		case `${SEARCH}_REJECTED`:
			return {
				...state
			};
		case `${SUGGEST}_FULFILLED`:
			return {
				...state,
				suggestions: action.payload.data.totalItems !== 0 ? [...action.payload.data.items] : []
			};
		case `${SUGGEST}_PENDING`:
			return {
				...state
			};
		case `${SUGGEST}_REJECTED`:
			return {
				...state
			};
		case `${PAGINATE}_FULFILLED`:
			return {
				...state,
				books: action.payload.data.totalItems !== 0 ? [...action.payload.data.items] : [],
				totalItems: action.payload.data.totalItems,
				url: action.payload.request ? action.payload.request.responseURL : undefined
			};
		case `${PAGINATE}_PENDING`:
			return {
				...state
			};
		case `${PAGINATE}_REJECTED`:
			return {
				...state
			};
		case CLEAR_SUGGESTIONS:
			return {
				...state,
				suggestions: []
			};
		default:
			return state;
	}
};

export default reducer;
