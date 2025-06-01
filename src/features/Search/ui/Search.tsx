import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { classNames } from '@shared/lib/classNames';
import { useDebouncedQueryParam } from '@shared/hooks/useDebouncedQueryParam';
import { Input } from '@shared/ui/Input';
import styles from './Search.module.scss';

type SearchProps = {
	className?: string;
};

const Search = ({ className }: SearchProps) => {
	const searchParams = useSearchParams();
	const [query, setQuery, reset] = useDebouncedQueryParam('q');
	const isCategory = Boolean(searchParams.get('category'));

	useEffect(() => {
		if (isCategory && query) reset();
	}, [isCategory, query, reset]);

	return (
		<Input
			label={'Search:'}
			placeholder={'Lorem...'}
			className={classNames(styles.search, {}, [className])}
			onChange={setQuery}
			value={query}
			disabled={isCategory}
		/>
	);
};

export default Search;