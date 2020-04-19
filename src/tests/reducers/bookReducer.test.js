/* eslint-disable no-undef */
import { initialState, reducer } from '../../redux/reducers/booksReducer';

describe('Test the reducers', () => {
	it('should return the results', () => {
		expect(
			reducer(initialState, {
				type: 'SELECT_BOOK_FULFILLED',
				payload: { data: 'data' }
			})
		).toEqual({
			...initialState,
			specificBook: 'data'
		});
	});
	it('should return the rejection', () => {
		expect(
			reducer(initialState, {
				type: 'SELECT_BOOK_REJECTED'
			})
		).toEqual({ ...initialState, noResult: true });
	});
});
