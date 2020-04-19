/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockConfigureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import BooksList from '../../components/books/BooksList';

describe('Test List of books', () => {
	it('Should render List of books', () => {
		const store = mockConfigureStore([thunk])({
			searchReducer: {
				books: [{ volumeInfo: { title: 'title' } }, { volumeInfo: { title: 'title2' } }],
				totalItems: 2
			}
		});
		const theme = createMuiTheme({
			palette: {
				primary: {
					main: '#0074D9'
				},
				secondary: {
					main: '#4caf50'
				}
			}
		});
		const component = mount(
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<BooksList history={{ push: (path) => path }} />
				</Provider>
			</ThemeProvider>
		);
		const selectBook = jest.spyOn(component.find('[testData="book"]').at(1).props(), 'onClick');
		component.find('[testData="book"]').at(1).props().onClick();
		expect(selectBook).toBeCalled();
		expect(component.length).toEqual(1);
	});
	it('Should render No results found', () => {
		const store = mockConfigureStore([thunk])({
			searchReducer: {
				books: [],
				totalItems: 0
			}
		});
		const theme = createMuiTheme({
			palette: {
				primary: {
					main: '#0074D9'
				},
				secondary: {
					main: '#4caf50'
				}
			}
		});
		const component = mount(
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<BooksList history={{ push: (path) => path }} />
				</Provider>
			</ThemeProvider>
		);
		expect(component.length).toEqual(1);
	});
});
