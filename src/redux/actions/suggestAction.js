import httpService from '../../services/httpService';
import { SUGGEST } from './actionTypes';

export default (query) => {
	return {
		type: SUGGEST,
		payload: httpService.get(`?q=intitle:${query}&printType=books&orderBy=newest`)
	};
};
