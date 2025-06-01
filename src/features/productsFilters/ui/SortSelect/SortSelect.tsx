'use client';

import { useCallback, useEffect } from 'react';
import {  useSearchParams } from 'next/navigation';
import { classNames } from '@shared/lib/classNames';
import { useQueryParam } from '@shared/hooks/useQueryParam';
import { Select } from '@shared/ui/Select';
import { sortOptions } from '../../model/data/sortSelect.data';
import styles from './SortSelect.module.scss';

type SortSelectProps = {
	className?: string;
};

const SortSelect = ({ className }: SortSelectProps) => {
	const searchParams = useSearchParams();
	const [sortOrder, setSortOrder] = useQueryParam('order');
	const isCategory = Boolean(searchParams.get('category'));

	useEffect(() => {
		if (isCategory && sortOrder) setSortOrder(null);
	}, [isCategory, sortOrder, setSortOrder]);

	const handleChange = useCallback((value: string) => {
		if (value === 'no_sort') setSortOrder(null);
		else setSortOrder(value);
	}, [setSortOrder]);

	return (
		<Select
			label={'Sort by:'}
			options={sortOptions}
			className={classNames(styles.select, {}, [className])}
			onChange={handleChange}
			value={sortOrder || 'no_sort'}
			disabled={isCategory}
		/>
	);
};

export default SortSelect;