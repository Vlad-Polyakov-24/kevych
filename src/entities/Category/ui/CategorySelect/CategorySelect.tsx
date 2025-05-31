'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { classNames } from '@shared/lib/classNames';
import { useGetCategories } from '../../model/hooks/useGetCategories';
import { Select } from '@shared/ui/Select';
import { generateCategoryOptions } from '../../model/data/categorySelect.data';
import styles from './CategorySelect.module.scss';

type CategorySelectProps = {
	className?: string;
};

const CategorySelect = ({ className }: CategorySelectProps) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { data: categories } = useGetCategories();
	const currentCategory = searchParams.get('category') || 'All';

	const options = useMemo(
		() => generateCategoryOptions(categories || []),
		[categories]
	);

	const handleChange = useCallback((value: string) => {
		const params = new URLSearchParams(searchParams);

		if (value === 'All') {
			params.delete('category');
		} else {
			params.set('category', value);
		}

		router.replace(`?${params.toString()}`);
	}, [router, searchParams]);

	return (
		<Select
			label={'Category:'}
			className={classNames(styles.select, {}, [className])}
			options={options}
			onChange={handleChange}
			value={currentCategory}
		/>
	);
};

export default CategorySelect;