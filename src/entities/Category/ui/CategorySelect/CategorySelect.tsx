'use client';

import { useCallback, useMemo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useQueryParam } from '@shared/hooks/useQueryParam';
import { useGetCategories } from '../../model/hooks/useGetCategories';
import { Select } from '@shared/ui/Select';
import { generateCategoryOptions } from '../../model/data/categorySelect.data';
import styles from './CategorySelect.module.scss';

type CategorySelectProps = {
	className?: string;
};

const CategorySelect = ({ className }: CategorySelectProps) => {
	const { data: categories } = useGetCategories();
	const [category, setCategory] = useQueryParam('category');

	const options = useMemo(
		() => generateCategoryOptions(categories || []),
		[categories]
	);

	const handleChange = useCallback((value: string) => {
		setCategory(value === 'All' ? null : value);
	}, [setCategory]);

	return (
		<Select
			label={'Category:'}
			className={classNames(styles.select, {}, [className])}
			options={options}
			onChange={handleChange}
			value={category || 'All'}
		/>
	);
};

export default CategorySelect;