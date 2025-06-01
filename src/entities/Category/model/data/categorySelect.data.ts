import type { ISelectOptions } from '@shared/ui/Select';

export const generateCategoryOptions = (categories: string[]): ISelectOptions<string>[] => {
	const defaultOption = { value: 'All', label: 'All' };
	const options = categories.map(c => ({ value: c, label: c }));

	return [defaultOption, ...options];
};