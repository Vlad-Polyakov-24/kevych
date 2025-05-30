import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {
	return (
		<section className={classNames(styles.intro, {}, [className])}>
			<Container>
				LOGIN INTRO
			</Container>
		</section>
	);
};

export { SectionIntro };