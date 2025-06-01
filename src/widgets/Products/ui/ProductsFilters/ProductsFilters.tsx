import { classNames } from '@shared/lib/classNames';
import { FlexH } from '@shared/ui/Stack';
import { Search, SortSelect } from '@features/productsFilters';
import { FilterCategorySelect } from '../FilterCategorySelect/FilterCategorySelect';
import styles from './ProductsFilters.module.scss';

type ProductsFiltersProps = {
	className?: string;
};

const ProductsFilters = ({ className }: ProductsFiltersProps) => (
	<FlexH
		gap={'16'}
		align={'center'}
		className={classNames(styles.filters, {}, [className])}
		wrap
	>
		<FilterCategorySelect />
		<SortSelect />
		<Search />
	</FlexH>
);

export { ProductsFilters };