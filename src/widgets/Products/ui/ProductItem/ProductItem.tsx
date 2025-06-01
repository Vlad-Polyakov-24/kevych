'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Text, TextAlign, TextColor, TextSize } from '@shared/ui/Text';
import { Routes } from '@shared/const/routes';
import type { IProduct } from '@entities/Product';
import styles from './ProductItem.module.scss';

type ProductItemProps = {
	className?: string;
	product: IProduct;
	priority?: boolean;
};

const ProductItem = (props: ProductItemProps) => {
	const { className, priority, product: { id, thumbnail, title, description, category, brand, price } } = props;
	const router = useRouter();

	const handleRedirect = useCallback((id: string | number) => {
		router.push(`${Routes.PRODUCT}/${id}`);
	}, [router]);

	return (
		<FlexV
			as={'li'}
			align={'stretch'}
			justify={'stretch'}
			gap={'16'}
			className={classNames(styles.item, {}, [className])}
			onClick={() => handleRedirect(id)}
		>
			<Image
				src={thumbnail}
				alt={title}
				width={200}
				height={200}
				priority={priority}
				className={styles.item__img}
			/>
			<Text
				title={title}
				text={description}
				color={TextColor.DARK}
			/>
			<FlexH
				as={'ul'}
				justify={'between'}
				gap={'12'}
				wrap
			>
				<li>
					<span className={'fw-600'}>Category:</span> {category}
				</li>
				<li>
					<span className={'fw-600'}>Brand:</span> {brand}
				</li>
			</FlexH>
			<Text
				text={`$${price}`}
				size={TextSize.L}
				align={TextAlign.RIGHT}
				color={TextColor.DARK}
				className={'mt-a'}
			/>
		</FlexV>
	);
};

export { ProductItem };