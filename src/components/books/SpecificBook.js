/* eslint-disable react/no-danger */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import selectBookAction from '../../redux/actions/selectBookAction';

const useStyles = makeStyles({
	actionArea: {
		gridGap: 20
	},
	media: {
		height: 400,
		width: 280,
		float: 'right',
		margin: '0 20px',
		'@media (max-width: 450px)': {
			height: 360,
			width: 240
		}
	},
	content: {
		padding: 10,
		minWidth: 200
	},
	h6: {
		color: '#263238',
		fontWeight: 500,
		fontSize: '20px',
		letterSpacing: '-0.05px',
		lineHeight: '20px',
		marginBottom: 10
	},
	pages: {
		color: '#263238',
		fontWeight: 500,
		fontSize: '16px',
		letterSpacing: '-0.05px',
		lineHeight: '20px',
		marginBottom: 10
	},
	body1: {
		color: '#546e7a',
		fontSize: '14px',
		letterSpacing: '-0.05px',
		lineHeight: '21px',
		margin: '20px 0'
	},
	body2: {
		color: '#546e7a',
		fontSize: '12px',
		letterSpacing: '-0.04px',
		lineHeight: '18px'
	},
	desc: {
		color: '#4d5156',
		fontWeight: 500,
		fontSize: '15px',
		letterSpacing: '-0.05px',
		lineHeight: '20px',
		marginBottom: 10
	}
});

const SpecificBook = ({ match }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(selectBookAction(match.params.bookId));
	}, []);
	const book = useSelector((state) => state.booksReducer.specificBook);
	return (
		<>
			<Grid container className={classes.actionArea}>
				<Grid item sm={6}>
					{book === undefined ? (
						<Skeleton animation='wave' variant='rect' className={classes.media} />
					) : (
						<CardMedia
							className={classes.media}
							image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
						/>
					)}
				</Grid>
				<Grid item sm={6}>
					<CardContent className={classes.content}>
						<Typography className={classes.h6}>
							{book === undefined ? (
								<Skeleton animation='wave' className={classes.h6} />
							) : !book.volumeInfo.subtitle ? (
								book.volumeInfo.title
							) : (
								`${book.volumeInfo.title}: ${book.volumeInfo.subtitle}`
							)}
						</Typography>
						<Typography className={classes.body1}>
							{book === undefined ? (
								<Skeleton animation='wave' className={classes.body1} />
							) : (
								`Book by ${book.volumeInfo.authors}`
							)}
						</Typography>
						<Typography className={classes.pages}>
							{book === undefined ? (
								<Skeleton animation='wave' className={classes.pages} />
							) : (
								`Page count: ${book.volumeInfo.pageCount}`
							)}
						</Typography>
						<Typography className={classes.body2}>
							{book === undefined ? (
								<Skeleton animation='wave' className={classes.body2} />
							) : book.volumeInfo.publisher !== undefined ? (
								`Published by "${book.volumeInfo.publisher}", ${book.volumeInfo.publishedDate}`
							) : (
								`Published ${book.volumeInfo.publishedDate}`
							)}
						</Typography>
						<Typography className={classes.desc}>
							{book === undefined ? (
								<>
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' width={156} height={15} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' width={156} height={15} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' width={156} height={15} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' className={classes.desc} />
									<Skeleton animation='wave' width={156} height={15} />
								</>
							) : (
								<div dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
							)}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</>
	);
};
export default SpecificBook;
