/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import BookCard from '../../components/books/BooksItem';

describe('Test book card', () => {
	it('Should render book card', () => {
		const component = mount(<BookCard />);
		expect(component.length).toEqual(1);
	});
	it('Should render book card', () => {
		const component = mount(
			<BookCard
				book={{ volumeInfo: { imageLinks: { thumbnail: 'title' }, publisher: 'publisher' } }}
			/>
		);
		expect(component.length).toEqual(1);
	});
});
