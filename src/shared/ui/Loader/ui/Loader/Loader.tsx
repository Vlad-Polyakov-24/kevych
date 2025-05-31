import type { CSSProperties, ReactElement } from 'react';
import { DefaultLoader } from '../DefaultLoader/DefaultLoader';
import { OverlayLoader } from '../OverlayLoader/OverlayLoader';
import { type LoaderColor, LoaderTheme } from '../../model/types/Loader.types';

type LoaderProps = {
	className?: string;
	theme?: LoaderTheme;
	style?: CSSProperties;
	color?: LoaderColor;
};

const Loader = (props: LoaderProps) => {
	const { className, theme = LoaderTheme.DEFAULT, color = 'light', style } = props;

	const loaderMap: Record<LoaderTheme, () => ReactElement> = {
		[LoaderTheme.DEFAULT]: () => <DefaultLoader
			className={className}
			style={style}
			color={color}
		/>,
		[LoaderTheme.OVERLAY]: () => <OverlayLoader
			className={className}
			style={style}
			color={color}
		/>,
	};

	return loaderMap[theme]();
};

export default Loader;