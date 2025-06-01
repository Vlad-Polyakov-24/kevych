import { useMutation, useQueryClient } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { productApi } from '../../api/productApi';
import { productsKeys } from '../const/productKeys';
import type { IProduct, IProductsData } from '../types/Product.types';

const useEditProduct = () => {
	const queryClient = useQueryClient();

	const { mutate, mutateAsync, isPending, isSuccess, isError } = useMutation({
		mutationFn: productApi.editProduct,
		onMutate: async (updatedProduct) => {
			await queryClient.cancelQueries({ queryKey: productsKeys.allProducts });

			const previousData = queryClient.getQueryData<IProductsData>(productsKeys.allProducts);

			queryClient.setQueryData<IProductsData>(
				productsKeys.allProducts,
				(oldData) => {
					if (!oldData) return oldData;

					return {
						...oldData,
						pages: oldData.pages.map((page) => ({
							...page,
							products: page.products.map((product) =>
								product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
							),
						})),
					};
				}
			);

			queryClient.setQueryData<IProduct>(
				productsKeys.singleProduct(String(updatedProduct.id)),
				(oldProduct) => {
					return oldProduct ? { ...oldProduct, ...updatedProduct } : undefined
				}
			);

			return { previousData };
		},
		onError: (error) => errorHandler(error),
	});

	return { mutate, mutateAsync, isPending, isSuccess, isError };
};

export { useEditProduct };