import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useQueryParam = (key: string) => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const setValue = useCallback((value: string | null) => {
		const params = new URLSearchParams(searchParams);

		if (value === null) {
			params.delete(key);
		} else {
			params.set(key, value);
		}

		router.replace(`?${params.toString()}`);
	}, [key, router, searchParams]);

	const value = searchParams.get(key);

	return [value, setValue] as const;
};