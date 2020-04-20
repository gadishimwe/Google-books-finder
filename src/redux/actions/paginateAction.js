import urlParser from 'url-parse';
import httpService from '../../services/httpService';
import { PAGINATE } from './actionTypes';

export default (url, next) => {
	const { query } = urlParser(url, true);
	return {
		type: PAGINATE,
		payload: httpService.get(
			`?q=${query.q}&printType=books&orderBy=newest&startIndex=${next - 1}&maxResults=12`
		)
	};
};
