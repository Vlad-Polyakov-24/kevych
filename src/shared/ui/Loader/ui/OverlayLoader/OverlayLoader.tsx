import type { CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import { DefaultLoader } from '../DefaultLoader/DefaultLoader';
import type { LoaderColor } from '../../model/types/Loader.types';
import styles from './OverlayLoader.module.scss';

type OverlayLoaderProps = {
	className?: string;
	style?: CSSProperties;
	color: LoaderColor;
};

const OverlayLoader = ({ className, style, color }: OverlayLoaderProps) => (
	<div className={classNames(styles.overlay, {}, [className])} style={style}>
		<DefaultLoader color={color} />
	</div>
);

export { OverlayLoader };