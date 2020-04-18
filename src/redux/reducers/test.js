export const initialState = {
	number: 0
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_ONE':
			return {
				...state,
				number: state.number + 1
			};
		default:
			return state;
	}
};

export default reducer;
