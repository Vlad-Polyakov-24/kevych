import type { IField, IProductInputs } from '../types/ProductDetails.types';

export const fields: IField<IProductInputs>[] = [
	{
		name: 'title',
		label: 'Title',
		placeholder: 'Essence Mascara...',
	},
	{
		name: 'description',
		label: 'Description',
		placeholder: 'The Essence Mascara Lash...',
		type: 'textarea',
	},
	{
		name: 'price',
		label: 'Price',
		placeholder: '999',
	},
	{
		name: 'brand',
		label: 'Brand',
		placeholder: 'Essence',
	},
	{
		name: 'thumbnail',
		label: 'Image',
		placeholder: 'https://image.com',
	},
];