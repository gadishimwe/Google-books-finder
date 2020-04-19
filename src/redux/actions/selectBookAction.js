import httpService from '../../services/httpService';
import { SELECT_BOOK } from './actionTypes';

export default (bookId) => {
	return {
		type: SELECT_BOOK,
		payload: httpService.get(`/${bookId}`)
	};
};
