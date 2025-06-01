export interface IProduct {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	rating: number;
	tags: string[];
	brand: string;
	images: string[];
	thumbnail: string;
}

export type SortOrder = 'asc' | 'desc';

export interface IGetProductsParams {
	limit?: number;
	skip?: number;
	q?: string;
	category?: string;
	sortBy?: string;
	order?: SortOrder;
}

export interface IProductsResponse {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}