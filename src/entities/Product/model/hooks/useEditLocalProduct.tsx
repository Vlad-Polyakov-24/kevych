import { useQueryClient } from '@tanstack/react-query';
import { productsKeys } from '../const/productKeys';
import type { IProduct, IProductsData } from '../types/Product.types';

const useEditLocalProduct = () => {
	const queryClient = useQueryClient();

	return (updatedProduct: IProduct) => {
		queryClient.setQueryData<IProductsData>(productsKeys.allProducts, (oldData) => {
			if (!oldData) return oldData;

			return {
				...oldData,
				pages: oldData.pages.map((page) => ({
					...page,
					products: page.products.map((product) =>
						product.id === updatedProduct.id ? updatedProduct : product
					),
				})),
			};
		});
		queryClient.setQueryData<IProduct>(
			productsKeys.singleProduct(updatedProduct.id),
			updatedProduct
		);
	};
};

export { useEditLocalProduct };