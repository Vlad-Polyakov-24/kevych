'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productApi } from '../../api/productApi';
import { productsKeys } from '../const/productKeys';
import { Routes } from '@shared/const/routes';
import type { IProductsData } from '../types/Product.types';

const useRemoveProduct = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	const { mutate, isPending, isError, isSuccess } = useMutation({
		mutationFn: (productId: string | number) => productApi.removeProduct(productId),

		onMutate: async (productId) => {
			await queryClient.cancelQueries({ queryKey: productsKeys.allProducts });

			const previousData = queryClient.getQueryData<IProductsData>(productsKeys.allProducts);

			queryClient.setQueriesData<IProductsData>(
				{ queryKey: productsKeys.allProducts },
				(oldData) => {
					if (!oldData) return oldData;

					return {
						...oldData,
						pages: oldData.pages.map((page) => ({
							...page,
							products: page.products.filter((product) => product.id !== productId),
						})),
					};
				}
			);

			return { previousData };
		},

		onError: (_, __, context) => {
			if (context?.previousData) {
				queryClient.setQueryData(productsKeys.allProducts, context.previousData);
			}
		},

		onSuccess: () => {
			router.push(Routes.HOME);
		},
	});

	return { mutate, isPending, isSuccess, isError };
};

export { useRemoveProduct };