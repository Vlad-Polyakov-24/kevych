import type { ElementType } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Tag.module.scss';

type TagProps<T extends ElementType = 'span'> = {
	as?: T;
	className?: string;
	tag: string;
	theme?: 'dark' | 'light';
};

const Tag = <T extends ElementType = 'div'>({ className, tag, theme = 'dark', as }: TagProps<T>) => {
	const Component = as || 'span';

	return (
		<Component className={classNames(styles.tag, {}, [className, styles[theme]])}>{tag}</Component>
	);
};

export default Tag;