import type { ISelectOptions } from '@shared/ui/Select';

export const sortOptions: ISelectOptions<string>[] = [
	{
		value: 'no_sort',
		label: 'Not sorted',
	},
	{
		value: 'asc',
		label: 'asc',
	},
	{
		value: 'desc',
		label: 'desc',
	},
];