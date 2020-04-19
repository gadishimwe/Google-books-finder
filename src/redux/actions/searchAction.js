import httpService from '../../services/httpService';
import { SEARCH } from './actionTypes';

export default (query, isSuggestion) => {
	return {
		type: SEARCH,
		payload: isSuggestion
			? httpService.get(`?q=intitle:${query}&printType=books&orderBy=newest`)
			: httpService.get(`?q=intitle:${query}+OR+inauthor:${query}&printType=books&orderBy=newest`)
	};
};
