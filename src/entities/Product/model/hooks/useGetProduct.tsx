'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { errorHandler } from '@shared/lib/errorHandler';
import { productApi } from '../../api/productApi';
import { productsKeys } from '../const/productKeys';
import { Routes } from '@shared/const/routes';
import type { IProductsData } from '../types/Product.types';

const useGetProduct = (id: number | string) => {
	const queryClient = useQueryClient();
	const router = useRouter();

	const fallbackData = useMemo(() => {
		const cached = queryClient.getQueryData<IProductsData>(productsKeys.allProducts);
		if (!cached) return undefined;

		for (const page of cached.pages) {
			const found = page.products.find((p) => p.id === Number(id));

			if (found) return found;
		}

		return undefined;
	}, [id, queryClient]);

	const { data, isLoading, isSuccess, isError, error } = useQuery({
		queryKey: productsKeys.singleProduct(id),
		queryFn: async () => {
			try {
				return await productApi.getProductById(id);
			} catch (err) {
				if (isAxiosError(err) && err?.response?.status === 404) {
					if (fallbackData) {
						queryClient.setQueryData(productsKeys.singleProduct(id), fallbackData);
						return fallbackData;
					} else {
						router.replace(Routes.HOME);
					}
				}
				throw err;
			}
		},
		enabled: !!id,
		retry: false,
	});

	useEffect(() => {
		if (isError) {
			errorHandler(error);
		}
	}, [isError, error]);

	return { data, isLoading, isSuccess, isError };
};

export { useGetProduct };