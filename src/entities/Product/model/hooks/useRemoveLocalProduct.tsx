import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { productsKeys } from '../const/productKeys';
import { Routes } from '@shared/const/routes';
import type { IProductsData } from '../types/Product.types';

const useRemoveLocalProduct = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return (id: number) => {
		queryClient.setQueryData<IProductsData>(productsKeys.allProducts, (oldData) => {
			if (!oldData) return oldData;
			return {
				...oldData,
				pages: oldData.pages.map((page) => ({
					...page,
					products: page.products.filter(p => p.id !== id),
				})),
			};
		});
		queryClient.removeQueries({ queryKey: productsKeys.singleProduct(id) });
		router.push(Routes.HOME);
	};
};

export { useRemoveLocalProduct };