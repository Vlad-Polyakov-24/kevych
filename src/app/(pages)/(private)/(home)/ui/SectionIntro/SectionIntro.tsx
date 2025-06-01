import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Products } from '@widgets/Products';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {
	return (
		<section className={classNames(styles.intro, {}, [className])}>
			<Container>
				<Products />
			</Container>
		</section>
	);
};

export { SectionIntro };