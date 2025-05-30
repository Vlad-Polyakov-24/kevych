import type { CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import { DefaultLoader } from '../DefaultLoader/DefaultLoader';
import styles from './OverlayLoader.module.scss';

type OverlayLoaderProps = {
	className?: string;
	style?: CSSProperties;
};

const OverlayLoader = ({ className, style }: OverlayLoaderProps) => (
	<div className={classNames(styles.overlay, {}, [className])} style={style}>
		<DefaultLoader />
	</div>
);

export { OverlayLoader };