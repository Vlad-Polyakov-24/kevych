import { classNames } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { CategorySelect } from '@entities/Category';
import { SortSelect } from '@features/sortProducts';
import styles from './ProductsFilters.module.scss';

type ProductsFiltersProps = {
	className?: string;
};

const ProductsFilters = ({ className }: ProductsFiltersProps) => {

	return (
		<FlexH
			gap={'16'}
			align={'center'}
			className={classNames(styles.filters, {}, [className])}
			wrap
		>
			<CategorySelect />
			<SortSelect />
		</FlexH>
	);
};

export { ProductsFilters };