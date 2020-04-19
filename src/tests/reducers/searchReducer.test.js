/* eslint-disable no-undef */
import { initialState, reducer } from '../../redux/reducers/searchReducer';

describe('Test the reducers', () => {
	it('should return the results', () => {
		expect(
			reducer(initialState, {
				type: 'SEARCH_FULFILLED',
				payload: { data: { items: [1, 2] } }
			})
		).toEqual({
			...initialState,
			books: [1, 2]
		});
	});
	it('should return the results', () => {
		expect(
			reducer(initialState, {
				type: 'SEARCH_FULFILLED',
				payload: { data: { totalItems: 0 } }
			})
		).toEqual({ ...initialState, totalItems: 0 });
	});
	it('should return the rejection', () => {
		expect(
			reducer(initialState, {
				type: 'SEARCH_REJECTED'
			})
		).toEqual({
			...initialState
		});
	});
	it('should return the results', () => {
		expect(
			reducer(initialState, {
				type: 'SUGGEST_FULFILLED',
				payload: { data: { items: [1, 2] } }
			})
		).toEqual({ ...initialState, suggestions: [1, 2] });
	});
	it('should return the results', () => {
		expect(
			reducer(initialState, {
				type: 'SUGGEST_FULFILLED',
				payload: { data: { totalItems: 0 } }
			})
		).toEqual(initialState);
	});
	it('should return the rejection', () => {
		expect(
			reducer(initialState, {
				type: 'SUGGEST_REJECTED'
			})
		).toEqual({
			...initialState
		});
	});
});
