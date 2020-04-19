/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockConfigureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import configureStore from '../../redux/store';
import Search from '../../components/search/Search';

describe('Test Search', () => {
	it('Should render Search', () => {
		const store = configureStore();
		const component = mount(
			<Provider store={store}>
				<Search history={{ push: (path) => path }} />
			</Provider>
		);
		const handleSearch = jest.spyOn(
			component.find('[testData="search-button"]').at(1).props(),
			'onClick'
		);
		component.find('[testData="search-button"]').at(1).props().onClick();
		const handleChange = jest.spyOn(
			component.find('[testData="search-input"]').at(1).props(),
			'onChange'
		);
		component
			.find('[testData="search-input"]')
			.at(1)
			.props()
			.onChange({ target: { value: 'value' } });
		const onKeyDown = jest.spyOn(
			component.find('[testData="search-input"]').at(1).props(),
			'onKeyDown'
		);
		component.find('[testData="search-input"]').at(1).props().onKeyDown({ key: 'Enter' });
		const onKeyDown1 = jest.spyOn(
			component.find('[testData="search-input"]').at(1).props(),
			'onKeyDown'
		);
		component.find('[testData="search-input"]').at(1).props().onKeyDown({ key: 'other' });
		const onClickAway = jest.spyOn(
			component.find('[testData="click-away"]').props(),
			'onClickAway'
		);
		component.find('[testData="click-away"]').props().onClickAway({ key: 'Enter' });
		expect(onClickAway).toBeCalled();
		expect(onKeyDown).toBeCalled();
		expect(onKeyDown1).toBeCalled();
		expect(handleChange).toBeCalled();
		expect(handleSearch).toBeCalled();
		expect(component.length).toEqual(1);
	});
	it('Should render Search', () => {
		const store = mockConfigureStore([thunk])({
			searchReducer: {
				suggestions: [{ volumeInfo: { title: 'title' } }, { volumeInfo: { title: 'title2' } }]
			}
		});
		const component = mount(
			<Provider store={store}>
				<Search history={{ push: (path) => path }} />
			</Provider>
		);
		const handleSuggestionClick = jest.spyOn(
			component.find('[testData="suggestion"]').at(1).props(),
			'onClick'
		);
		component
			.find('[testData="suggestion"]')
			.at(1)
			.props()
			.onClick({ target: { innerHTML: 'Value' } });
		expect(handleSuggestionClick).toBeCalled();
	});
});
