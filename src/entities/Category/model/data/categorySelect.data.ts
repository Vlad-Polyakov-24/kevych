import type { ISelectOptions } from '@shared/ui/Select';

export const generateCategoryOptions = (
	categories: string[],
	includeAllOption = false,
): ISelectOptions[] => {
	const placeholderOption = { value: '', label: 'Choose category...' };
	const allOption = { value: 'All', label: 'All' };
	const mapped = categories.map((c) => ({ value: c, label: c }));

	return includeAllOption
		? [allOption, ...mapped]
		: [placeholderOption, ...mapped];
};