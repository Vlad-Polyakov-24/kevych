'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { categoryApi } from '../../api/categoryApi';
import { categoryKeys } from '../const/categoryKeys';

const useGetCategories = () => {
	const { data, isLoading, isSuccess, isError, error } = useQuery({
		queryKey: categoryKeys.allCategories,
		queryFn: categoryApi.getCategories,
	});

	useEffect(() => {
		if (isError) {
			errorHandler(error);
		}
	}, [isError, error]);

	return { data, isLoading, isSuccess, isError };
};

export { useGetCategories };