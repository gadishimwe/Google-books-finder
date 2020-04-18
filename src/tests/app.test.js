/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../app';
import configureStore from '../redux/store';

describe('Test App', () => {
	it('Should render App', () => {
		const store = configureStore();
		const component = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(component.length).toEqual(1);
	});
});
