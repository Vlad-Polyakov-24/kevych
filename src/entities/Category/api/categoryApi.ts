import axios from 'axios';
import { endpoints } from '@shared/const/endpoinst';

export const categoryApi = {
	getCategories: async (): Promise<string[]> => {
		const { data } = await axios.get(endpoints.CATEGORIES);
		return data;
	},
};