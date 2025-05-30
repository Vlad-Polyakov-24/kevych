import type { CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './DefaultLoader.module.scss';

interface LoaderProps {
	className?: string;
	style?: CSSProperties;
}

const DefaultLoader = ({ className, style }: LoaderProps) => (
	<span className={classNames(styles.loader, {}, [className])} style={style} />
);

export { DefaultLoader };