import { classNames } from '@shared/lib/classNames';
import styles from './Search.module.scss';

type SearchProps = {
	className?: string;
};

const Search = ({ className }: SearchProps) => {

	return (
		<div className={classNames('', {}, [className])}></div>
	);
};

export default Search;