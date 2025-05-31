import axios from 'axios';
import { endpoints } from '@shared/const/endpoinst';
import type { IGetProductsParams, IProductsResponse } from '../model/types/Product.types';

export const productApi = {
	getProducts: async (queryParams: Partial<IGetProductsParams> = {}): Promise<IProductsResponse> => {
		const { category, q, order } = queryParams;

		const url = category
			? `${endpoints.PRODUCTS}/category/${category}`
			: q
				? `${endpoints.PRODUCTS}/search`
				: endpoints.PRODUCTS;

		const endpoint = new URL(url);

		if (order) {
			endpoint.searchParams.append('sortBy', 'title');
		}

		Object.entries(queryParams)
			.filter(([, value]) => value !== undefined)
			.forEach(([key, value]) => endpoint.searchParams.append(key, String(value)));

		const { data } = await axios.get(endpoint.toString());

		return data;
	},
};