'use client';

import { useCallback } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useQueryParam } from '@shared/hooks/useQueryParam';
import { CategorySelect } from '@entities/Category';
import styles from './FilterCategorySelect.module.scss';

type FilterCategorySelectProps = {
	className?: string;
};

const FilterCategorySelect = ({ className }: FilterCategorySelectProps) => {
	const [category, setCategory] = useQueryParam('category');

	const handleChange = useCallback((value: string) => {
		setCategory(value === 'All' ? null : value);
	}, [setCategory]);

	return (
		<CategorySelect
			className={classNames(styles.select, {}, [className])}
			onChange={handleChange}
			value={category || 'All'}
			includeAllOption
		/>
	);
};

export { FilterCategorySelect };