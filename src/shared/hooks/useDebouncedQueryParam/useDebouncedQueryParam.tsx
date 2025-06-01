import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from '@shared/hooks/useDebounce';

export const useDebouncedQueryParam = (key: string, delay = 500) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const isResetting = useRef(false);
	const initial = searchParams.get(key) || '';
	const [value, setValue] = useState(initial);
	const debounced = useDebounce(value, delay);

	useEffect(() => {
		if (isResetting.current) {
			isResetting.current = false;
			return;
		}

		const params = new URLSearchParams(searchParams);
		if (debounced === '') {
			params.delete(key);
		} else {
			params.set(key, debounced);
		}
		router.replace(`?${params.toString()}`);
	}, [debounced, key, router, searchParams]);

	const reset = useCallback(() => {
		isResetting.current = true;

		const params = new URLSearchParams(searchParams);
		params.delete(key);
		setValue('');
		router.replace(`?${params.toString()}`);
	}, [key, router, searchParams]);

	return [value, setValue, reset] as const;
};