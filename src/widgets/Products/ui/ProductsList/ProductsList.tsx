import { classNames } from '@shared/lib/classNames';
import { ProductItem } from '../ProductItem/ProductItem';
import type { IProduct } from '@entities/Product';
import styles from './ProductsList.module.scss';

type ProductsListProps = {
	className?: string;
	products: IProduct[];
};

const ProductsList = ({ className, products }: ProductsListProps) => (
	<ul className={classNames(styles.list, {}, [className])}>
		{products.map((product, i) => (
			<ProductItem
				key={product.id}
				product={product}
				priority={i < 6}
			/>
		))}
	</ul>
);

export { ProductsList };