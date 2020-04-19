/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import BookCard from './BooksItem';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))',
		gridGap: 10,
		padding: 10,
		'@media (max-width: 786px)': {
			gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))',
			gridGap: 5,
			padding: 5
		}
	},
	noResults: {
		fontSize: 20
	},
	welcome: {
		margin: theme.spacing(4),
		color: 'white',
		fontWeight: 500,
		fontSize: 30,
		letterSpacing: '-0.06px',
		lineHeight: '24px',
		textAlign: 'center'
	},
	subtitle1: {
		color: 'white',
		fontSize: '18px',
		letterSpacing: '-0.05px',
		lineHeight: '25px',
		textAlign: 'center'
	}
}));
const BooksList = ({ history }) => {
	const classes = useStyles();
	const state = useSelector((statee) => statee.searchReducer);
	const array = state.books.length !== 0 ? state.books : [...new Array(12)];
	const dispatch = useDispatch();
	const selectBook = (book) => {
		history.push(`books/${book.id}`);
		dispatch({ type: 'CLEAR_SUGGESTIONS' });
	};

	return (
		<div className={classes.root}>
			{state.totalItems !== undefined ? (
				state.totalItems !== 0 ? (
					array.map((book, index) => (
						<div key={index} onClick={() => selectBook(book)} testData='book'>
							<BookCard book={book} />
						</div>
					))
				) : (
					<div className={classes.noResults}>No results found.</div>
				)
			) : (
				<div>
					<Typography className={classes.welcome}>Welcome to Google Books Finder!</Typography>
					<Typography className={classes.subtitle1}>
						To get started, just type in the name of your favorite book or its author!
					</Typography>
				</div>
			)}
		</div>
	);
};
export default BooksList;
