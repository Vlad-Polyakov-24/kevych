import type { CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import type { LoaderColor } from '../../model/types/Loader.types';
import styles from './DefaultLoader.module.scss';

interface LoaderProps {
	className?: string;
	style?: CSSProperties;
	color: LoaderColor
}

const DefaultLoader = ({ className, style, color }: LoaderProps) => (
	<span className={classNames(styles.loader, {}, [className, styles[color]])} style={style} />
);

export { DefaultLoader };