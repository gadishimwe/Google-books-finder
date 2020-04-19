import React from 'react';
import { Redirect } from 'react-router-dom';
import landingPage from './views';
import SpecificBookView from './views/specificBookView';

const routes = [
	{
		path: '/',
		exact: true,
		component: () => <Redirect to='/books' />
	},
	{
		path: '/books',
		exact: true,
		component: landingPage
	},
	{
		path: '/books/:bookId',
		exact: true,
		component: SpecificBookView
	}
];

export default routes;
