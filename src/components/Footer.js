import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
		// zIndex: theme.zIndex.drawer + 1,
	},
	appBar: {
		height: 40,
		backgroundColor: 'black'
	},
	typographyBody1: {
		fontSize: '14px',
		margin: 'auto',
		display: 'inline'
	}
}));
export default function Footer() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appBar}>
				<Typography className={classes.typographyBody1}>© 2020 Google Books Finder</Typography>
			</AppBar>
		</div>
	);
}
