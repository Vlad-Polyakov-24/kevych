import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Products } from '@widgets/Products';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames('section-padding', {}, [className])}>
		<Container>
			<Products />
		</Container>
	</section>
);

export { SectionIntro };