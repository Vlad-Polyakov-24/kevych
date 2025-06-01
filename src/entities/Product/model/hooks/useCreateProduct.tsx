'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { useToast } from '@shared/hooks/useToast';
import { generateLocalId } from '@shared/lib/generateLocalId';
import { productApi } from '../../api/productApi';
import { productsKeys } from '../const/productKeys';
import type { IProductsData } from '../types/Product.types';

const useCreateProduct = () => {
	const queryClient = useQueryClient();
	const { success } = useToast();

	const { mutate, mutateAsync, isPending, isSuccess, isError } = useMutation({
		mutationFn: productApi.createProduct,
		onSuccess: (createdProduct) => {
			const localId = generateLocalId();
			const newProduct = { ...createdProduct, id: localId };

			queryClient.setQueryData<IProductsData>(productsKeys.allProducts, (oldData) => {
				if (!oldData) return oldData;

				const firstPage = oldData.pages[0];

				return {
					...oldData,
					pages: [
						{
							...firstPage,
							products: [newProduct, ...firstPage.products],
						},
						...oldData.pages.slice(1),
					],
				};
			});

			success('Backend operations will overwrite cache with fresh data, removing locally created products. (Edits/removals of local products won’t trigger backend requests.)');
		},
		onError: (error) => errorHandler(error),
	});

	return { mutate, mutateAsync, isPending, isSuccess, isError };
};

export { useCreateProduct };