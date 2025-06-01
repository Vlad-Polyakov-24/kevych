import { IProduct } from '@entities/Product';

export type ProductDetailsStatus = 'edit' | 'read';

export type IProductForm = Pick<IProduct, 'title' | 'description' | 'brand' | 'category' | 'thumbnail' | 'tags'> & {
	price: string;
};

export interface IField<T> {
	name: keyof T;
	label: string;
	placeholder?: string;
	type?: string;
}

export type IProductInputs = Omit<IProductForm, 'category' | 'tags'>;