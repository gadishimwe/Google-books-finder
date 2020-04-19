/* eslint-disable no-nested-ternary */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
	actionArea: {
		display: 'flex'
	},
	media: {
		height: 300,
		minWidth: 210,
		'@media (max-width: 450px)': {
			height: 260,
			minWidth: 150
		}
	},
	content: {
		padding: 10,
		minWidth: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	h6: {
		color: '#263238',
		fontWeight: 500,
		fontSize: '15px',
		letterSpacing: '-0.05px',
		lineHeight: '20px',
		marginBottom: 10
	},
	body1: {
		color: '#546e7a',
		fontSize: '14px',
		letterSpacing: '-0.05px',
		lineHeight: '21px'
	},
	body2: {
		color: '#546e7a',
		fontSize: '12px',
		letterSpacing: '-0.04px',
		lineHeight: '18px'
	}
});

const BookCard = ({ book }) => {
	const classes = useStyles();
	return (
		<Card>
			<CardActionArea>
				<div className={classes.actionArea}>
					{book === undefined ? (
						<Skeleton animation='wave' variant='rect' width={210} height={300} />
					) : (
						<CardMedia
							className={classes.media}
							image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
						/>
					)}
					<CardContent className={classes.content}>
						<div>
							<Typography className={classes.h6}>
								{book === undefined ? (
									<Skeleton animation='wave' width={196} height={15} />
								) : (
									book.volumeInfo.title
								)}
							</Typography>
							<Typography className={classes.body1}>
								{book === undefined ? (
									<Skeleton animation='wave' width={156} height={15} />
								) : (
									`${book.volumeInfo.authors}`
								)}
							</Typography>
						</div>
						<Typography className={classes.body2}>
							{book === undefined ? (
								<Skeleton animation='wave' width={196} height={15} />
							) : book.volumeInfo.publisher !== undefined ? (
								`Published by "${book.volumeInfo.publisher}"`
							) : (
								`Published ${book.volumeInfo.publishedDate}`
							)}
						</Typography>
					</CardContent>
				</div>
			</CardActionArea>
		</Card>
	);
};

export default BookCard;
