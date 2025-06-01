import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { ProductDetails } from '@widgets/ProductDetails';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames('section-padding', {}, [className])}>
		<Container>
			<ProductDetails defaultStatus={'edit'} />
		</Container>
	</section>
);

export { SectionIntro };