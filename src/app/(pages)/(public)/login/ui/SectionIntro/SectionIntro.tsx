import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { FlexV } from '@shared/ui/Stack';
import { Text, TextAlign, TextColor } from '@shared/ui/Text';
import { AuthForm } from '@features/authByUsername';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames(styles.intro, {}, [className])}>
		<Container display={'flex'} className={styles.intro__container}>
			<FlexV
				align={'stretch'}
				justify={'stretch'}
				gap={'16'}
				className={styles.intro__inner}
			>
				<Text
					titleTag={'h1'}
					title={'Please, enter username and password'}
					align={TextAlign.CENTER}
					color={TextColor.DARK}
				/>
				<AuthForm />
			</FlexV>
		</Container>
	</section>
);

export { SectionIntro };