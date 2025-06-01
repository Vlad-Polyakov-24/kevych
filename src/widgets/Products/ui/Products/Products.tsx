'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useGetProducts, type IGetProductsParams, type SortOrder } from '@entities/Product';
import { useInfiniteScroll } from '@shared/hooks/useInfiniteScroll';
import { FlexV } from '@shared/ui/Stack';
import { Loader } from '@shared/ui/Loader';
import { ProductsFilters } from '../ProductsFilters/ProductsFilters';
import { ProductsList } from '../ProductsList/ProductsList';
import styles from './Products.module.scss';

type ProductsProps = {
	className?: string;
};

const Products = ({ className }: ProductsProps) => {
	const searchParams = useSearchParams();

	const params: IGetProductsParams = useMemo(() => {
		const category = searchParams.get('category') || undefined;
		const q = searchParams.get('q') || undefined;
		const order = searchParams.get('order') as SortOrder || undefined;

		return { category, q, order };
	}, [searchParams]);

	const {
		data: { pages: products } = {},
		isLoading,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useGetProducts(params);

	const observerRef = useInfiniteScroll({
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	});

	return (
		<>
			<FlexV
				gap={'24'}
				align={'stretch'}
				justify={'stretch'}
				className={classNames(styles.products, {}, [className])}
			>
				<ProductsFilters />
				{products && (
					<ProductsList products={products} />
				)}
				{(isLoading || isFetchingNextPage) && (
					<Loader color={'light'} className={'m-centred'} />
				)}
			</FlexV>
			<div ref={observerRef} />
		</>
	);
};

export default Products;