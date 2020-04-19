/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import mockConfigureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SpecificBook from '../../components/books/SpecificBook';

describe('Test spacific book', () => {
	it('Should render spacific book', () => {
		const store = mockConfigureStore([thunk])({
			booksReducer: {
				specificBook: { volumeInfo: { imageLinks: { thumbnail: 'title' }, publisher: 'publisher' } }
			}
		});
		const component = mount(
			<Provider store={store}>
				<SpecificBook match={{ params: { bookId: 'booki-id' } }} />
			</Provider>
		);
		expect(component.length).toEqual(1);
	});
	it('Should render spacific book', () => {
		const store = mockConfigureStore([thunk])({
			booksReducer: {
				specificBook: {
					volumeInfo: {
						subtitle: 'sub'
					}
				}
			}
		});
		const component = mount(
			<Provider store={store}>
				<SpecificBook
					match={{ params: { bookId: 'booki-id' } }}
					book={{ volumeInfo: { imageLinks: { thumbnail: 'title' }, publisher: 'publisher' } }}
				/>
			</Provider>
		);
		expect(component.length).toEqual(1);
	});
	it('Should render spacific book', () => {
		const store = mockConfigureStore([thunk])({
			booksReducer: {
				specificBook: { volumeInfo: { imageLinks: { thumbnail: 'title' }, publisher: 'publisher' } }
			}
		});
		const component = mount(
			<Provider store={store}>
				<SpecificBook
					match={{ params: { bookId: 'booki-id' } }}
					book={{ volumeInfo: { imageLinks: { thumbnail: 'title' }, publisher: 'publisher' } }}
				/>
			</Provider>
		);
		expect(component.length).toEqual(1);
	});
});
