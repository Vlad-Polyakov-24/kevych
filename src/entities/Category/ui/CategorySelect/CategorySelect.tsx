'use client';

import { type SelectHTMLAttributes, useMemo } from 'react';
import { useGetCategories } from '../../model/hooks/useGetCategories';
import { Select } from '@shared/ui/Select';
import { generateCategoryOptions } from '../../model/data/categorySelect.data';

interface CategorySelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
	className?: string;
	label?: string;
	onChange: (value: string) => void;
	value: string;
	includeAllOption?: boolean;
	error?: string;
}

const CategorySelect = (props: CategorySelectProps) => {
	const {
		value,
		onChange,
		label = 'Category:',
		className,
		includeAllOption = false,
		error,
	} = props;
	const { data: categories } = useGetCategories();

	const options = useMemo(() => {
		const opts = generateCategoryOptions(categories || [], includeAllOption);

		return includeAllOption ? opts : opts.filter(opt => opt.value !== 'All');
	}, [categories, includeAllOption]);

	return (
		<Select
			label={label}
			className={className}
			options={options}
			value={value}
			onChange={onChange}
			error={error}
		/>
	);
};

export default CategorySelect;