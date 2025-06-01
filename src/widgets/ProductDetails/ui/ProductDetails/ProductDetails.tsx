'use client';

import { useCallback, useState, type ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import { FlexV } from '@shared/ui/Stack';
import { Loader } from '@shared/ui/Loader';
import { ProductRead } from '../ProductRead/ProductRead';
import { ProductForm } from '../ProductForm/ProductForm';
import { ReadControl } from '../ReadControl/ReadControl';
import type { IProduct } from '@entities/Product';
import type { ProductDetailsStatus } from '../../model/types/ProductDetails.types';
import styles from './ProductDetails.module.scss';

type ProductDetailsProps = {
	className?: string;
	defaultStatus?: ProductDetailsStatus;
	currentProduct?: IProduct;
	isLoading?: boolean;
};

const ProductDetails = (props: ProductDetailsProps) => {
	const { className, defaultStatus = 'read', currentProduct, isLoading } = props;
	const [status, setStatus] = useState<ProductDetailsStatus>(defaultStatus);

	const handleEdit = useCallback(() => setStatus('edit'), []);
	const handleCancel = useCallback(() => setStatus('read'), []);

	const detailsMap: Record<ProductDetailsStatus, () => ReactNode> = {
		read: () => currentProduct && (
			<>
				<ProductRead currentProduct={currentProduct} />
				<ReadControl handleEdit={handleEdit} id={currentProduct.id} />
			</>
		),
		edit: () => <ProductForm currentProduct={currentProduct} handleCancel={handleCancel} />,
	};

	return (
		<FlexV
			align={'stretch'}
			justify={'stretch'}
			gap={'16'}
			className={classNames(styles.details, {}, [className])}
		>
			{isLoading && <Loader color={'dark'} className={'m-centred'} />}
			{detailsMap[status]()}
		</FlexV>
	);
};

export default ProductDetails;