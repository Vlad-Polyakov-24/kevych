import type { IProduct } from '@entities/Product';

export const generateDefaultValues = (product?: IProduct) => ({
	title: product?.title ?? '',
	description: product?.description ?? '',
	price: product?.price.toString() ?? '',
	brand: product?.brand ?? '',
	category: product?.category ?? '',
	tags: product?.tags ?? [],
	thumbnail: product?.thumbnail ?? '',
});