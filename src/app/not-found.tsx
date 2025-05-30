import Link from 'next/link';
import { FlexV } from '@shared/ui/Stack';
import { Text, TextAlign, TextSize } from '@shared/ui/Text';
import { Button } from '@shared/ui/Button';
import { Routes } from '@shared/const/routes';

const NotFoundPage = () => (
	<FlexV as={'section'} align={'center'} justify={'center'} gap={'20'} grow>
		<Text
			titleTag={'h1'}
			align={TextAlign.CENTER}
			size={TextSize.XXL}
			title={'Page not found'}
		/>
		<Button as={Link} href={Routes.HOME}>Home</Button>
	</FlexV>
);

export default NotFoundPage;