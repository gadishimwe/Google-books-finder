/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store';
import SpecificBookView from '../../views/specificBookView';

describe('Test SpecificBookView', () => {
	it('Should render SpecificBookView', () => {
		const store = configureStore();
		const component = mount(
			<Provider store={store}>
				<SpecificBookView match={{ params: { bookId: 'booki-id' } }} />
			</Provider>
		);
		expect(component.length).toEqual(1);
	});
});
