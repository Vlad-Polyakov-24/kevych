import { useRouter } from 'next/navigation';
import { useCallback, type CSSProperties } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
import ArrowIcon from '@shared/assets/icons/arrow-to-right.svg';

type BackButtonProps = {
	className?: string;
	style?: CSSProperties;
};

const BackButton = (props: BackButtonProps) => {
	const { className, style } = props;
	const router = useRouter();

	const handleBack = useCallback(() => router.back(), [router]);

	return (
		<Button
			theme={ButtonTheme.DARK}
			size={ButtonSize.S}
			style={style}
			onClick={handleBack}
			className={className}
		>
			<Icon icon={<ArrowIcon />} size={IconSize.SIZE_14} />
			Back
		</Button>
	);
};

export default BackButton;