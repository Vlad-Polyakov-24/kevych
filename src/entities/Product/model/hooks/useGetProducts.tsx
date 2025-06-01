'use client';

import { useEffect, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { productApi } from '../../api/productApi';
import { productsKeys } from '../const/productKeys';
import type { IGetProductsParams } from '../types/Product.types';

const DEFAULT_LIMIT = 30;

const useGetProducts = (params?: Partial<IGetProductsParams>) => {
	const queryKey = useMemo(
		() => {
			if (params?.q) return productsKeys.search(params.q);
			if (params?.category) return productsKeys.category(params.category);
			if (params?.order) return productsKeys.order(params.order);
			return productsKeys.allProducts;
		},
		[params?.q, params?.category, params?.order]
	);

	const {
		data,
		isLoading,
		isSuccess,
		isError,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery({
		queryKey,
		initialPageParam: { skip: 0, limit: DEFAULT_LIMIT },
		queryFn: ({ pageParam }) =>
			productApi.getProducts({ ...params, ...pageParam }),
		getNextPageParam: (lastPage, allPages) => {
			const totalFetched = allPages.reduce((acc, page) => acc + page.products.length, 0);
			return totalFetched < lastPage.total ? { skip: totalFetched, limit: DEFAULT_LIMIT } : undefined;
		},
		select: (data) => ({
			pages: data.pages.map(page => page.products).flat(),
			total: data.pages[0]?.total ?? 0,
			pageParams: data.pageParams,
		}),
		refetchOnMount: false,
	});

	useEffect(() => {
		if (isError) {
			errorHandler(error);
		}
	}, [isError, error]);

	return {
		data,
		isLoading,
		isSuccess,
		isError,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	};
};

export { useGetProducts };