import type { SortOrder } from '../types/Product.types';

export const productsKeys = {
	allProducts: ['products', 'all'],
	category: (category: string) => (['products', 'category', category]),
	search: (q: string) => ['products', 'search', q],
	order: (order: SortOrder) => ['products', 'order', order],
} as const;