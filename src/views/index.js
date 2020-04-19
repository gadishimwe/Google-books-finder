import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import Search from '../components/search/Search';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import BooksList from '../components/books/BooksList';
import backgroundImage from '../../public/book1.jpg';

const useStyles = makeStyles({
	background: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover'
	},
	shadows: {
		background: 'rgba(0, 0, 0, 0.7)',
		minHeight: '100%'
	},
	wrapper: {
		paddingTop: 20
	}
});

const landingPage = (props) => {
	const classes = useStyles();
	const state = useSelector((statee) => statee.searchReducer);

	return (
		<>
			<MainNavbar />
			<div
				className={clsx({
					[classes.background]: state.totalItems === undefined
				})}
			>
				<div
					className={clsx({
						[classes.shadows]: state.totalItems === undefined,
						[classes.wrapper]: true
					})}
				>
					<Search {...props} />
					<BooksList {...props} />
				</div>
			</div>
			<Footer />
		</>
	);
};
export default landingPage;
