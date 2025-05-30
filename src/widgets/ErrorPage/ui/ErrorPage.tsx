import { useCallback } from 'react';
import { FlexV } from '@shared/ui/Stack';
import { Text, TextAlign, TextSize } from '@shared/ui/Text';
import { Button } from '@shared/ui/Button';

const ErrorPage = () => {

	const reloadPage = useCallback(() => {
		location.reload();
	}, []);

	return (
		<FlexV as={'section'} align={'center'} justify={'center'} gap={'20'} grow>
			<Text
				titleTag={'h1'}
				align={TextAlign.CENTER}
				size={TextSize.XXL}
				title={'Oops, something\'s wrong!'}
			/>
			<Button onClick={reloadPage}>
				Refresh page
			</Button>
		</FlexV>
	);
};

export { ErrorPage };
