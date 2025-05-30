import type { CSSProperties, ReactElement } from 'react';
import { DefaultLoader } from '../DefaultLoader/DefaultLoader';
import { OverlayLoader } from '../OverlayLoader/OverlayLoader';
import { LoaderTheme } from '../../model/types/Loader.types';

type LoaderProps = {
	className?: string;
	theme?: LoaderTheme;
	style?: CSSProperties;
};

const Loader = (props: LoaderProps) => {
	const { className, theme = LoaderTheme.DEFAULT, style } = props;

	const loaderMap: Record<LoaderTheme, () => ReactElement> = {
		[LoaderTheme.DEFAULT]: () => <DefaultLoader className={className} style={style} />,
		[LoaderTheme.OVERLAY]: () => <OverlayLoader className={className} style={style} />,
	};

	return loaderMap[theme]();
};

export default Loader;