/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Input, IconButton, Paper, Divider, ClickAwayListener } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import searchAction from '../../redux/actions/searchAction';
import suggestAction from '../../redux/actions/suggestAction';

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 22.5,
		margin: '0 20px 20px 20px',
		alignItems: 'center',
		overflow: 'hidden',
		'@media (max-width: 786px)': {
			margin: '0 10px 10px 10px'
		}
	},
	searchBar: {
		display: 'flex',
		flexGrow: 1,
		height: 48,
		padding: '0 15px'
	},
	searchInput: {
		flexGrow: 1
	},
	suggestions: {
		padding: 10,
		margin: 0,
		maxHeight: 38.18,
		flexWrap: 'no-wrap',
		overflow: 'hidden',
		'&:hover': {
			backgroundColor: '#dedede',
			cursor: 'pointer'
		}
	}
}));
const Search = ({ history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const suggest = (val) => {
		dispatch(suggestAction(val));
	};
	const handleChange = (e) => {
		setValue(e.target.value);
		suggest(e.target.value);
	};
	const handleSearch = (val, sug) => {
		dispatch({ type: 'CLEAR_SUGGESTIONS' });
		dispatch(searchAction(val, sug));
		history.push('/books');
	};
	const handleSuggestionClick = (e) => {
		setValue(e.target.innerHTML);
		handleSearch(`%22${e.target.innerHTML.split(' ').join('%20')}%22`, true);
	};
	const state = useSelector((statee) => statee.searchReducer);
	return (
		<div>
			<ClickAwayListener
				onClickAway={() => dispatch({ type: 'CLEAR_SUGGESTIONS' })}
				testData='click-away'
			>
				<Paper className={classes.root}>
					<div className={classes.searchBar}>
						<Input
							className={classes.searchInput}
							disableUnderline
							placeholder='Search books by title or author'
							value={value}
							onChange={handleChange}
							onKeyDown={(ev) =>
								ev.key === 'Enter' ? handleSearch(value.split(' ').join('+')) : null
							}
							testData='search-input'
						/>
						<IconButton
							onClick={() => handleSearch(value.split(' ').join('+'))}
							testData='search-button'
						>
							<SearchIcon color='primary' />
						</IconButton>
					</div>
					{state.suggestions.length !== 0
						? [...new Array(6)].map((x, index) =>
								state.suggestions[index] ? (
									<React.Fragment key={index}>
										<Divider />
										<p
											className={classes.suggestions}
											onClick={handleSuggestionClick}
											testData='suggestion'
										>
											{state.suggestions[index].volumeInfo.title}
										</p>
									</React.Fragment>
								) : null
						  )
						: null}
				</Paper>
			</ClickAwayListener>
			<Divider />
		</div>
	);
};
export default Search;
