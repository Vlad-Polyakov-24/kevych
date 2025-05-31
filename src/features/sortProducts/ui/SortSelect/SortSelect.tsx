'use client';

import { useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { classNames } from '@shared/lib/classNames';
import { Select } from '@shared/ui/Select';
import { sortOptions } from '../../model/data/sortSelect.data';
import styles from './SortSelect.module.scss';

type SortSelectProps = {
	className?: string;
};

const SortSelect = ({ className }: SortSelectProps) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const currentCategory = searchParams.get('order') || 'no_sort';
	const isCategory = !!searchParams.get('category');

	useEffect(() => {
		if (isCategory && searchParams.get('order')) {
			const params = new URLSearchParams(searchParams);
			params.delete('order');
			router.replace(`?${params.toString()}`);
		}
	}, [isCategory, searchParams, router]);

	const handleChange = useCallback((value: string) => {
		const params = new URLSearchParams(searchParams);

		if (value === 'no_sort') {
			params.delete('order');
		} else {
			params.set('order', value);
		}

		router.replace(`?${params.toString()}`);
	}, [router, searchParams]);

	return (
		<Select
			label={'Sort by:'}
			options={sortOptions}
			className={classNames(styles.select, {}, [className])}
			onChange={handleChange}
			value={currentCategory}
			disabled={isCategory}
		/>
	);
};

export default SortSelect;