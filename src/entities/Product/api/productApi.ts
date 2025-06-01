import axios from 'axios';
import { endpoints } from '@shared/const/endpoinst';
import type { IGetProductsParams, IProduct, IProductsResponse } from '../model/types/Product.types';

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
	getProductById: async (id: number | string): Promise<IProduct> => {
		const { data } = await axios.get(`${endpoints.PRODUCTS}/${id}`);
		return data;
	},
	editProduct: async (product: Partial<IProduct>): Promise<IProduct> => {
		const { id, ...rest } = product;
		const endpoint = `${endpoints.PRODUCTS}/${id}`;

		const { data } = await axios.patch(endpoint, rest);
		return data;
	},
	createProduct: async (product: Partial<IProduct>): Promise<IProduct> => {
		const endpoint = `${endpoints.PRODUCTS}/add`;

		const { data } = await axios.post(endpoint, product);
		return data;
	},
	removeProduct: async (id: number | string): Promise<void> => {
		await axios.delete(`${endpoints.PRODUCTS}/${id}`);
	},
};