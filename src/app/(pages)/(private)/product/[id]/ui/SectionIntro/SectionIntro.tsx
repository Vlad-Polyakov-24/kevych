'use client';

import { useParams } from 'next/navigation';
import { classNames } from '@shared/lib/classNames';
import { useGetProduct } from '@entities/Product';
import { Container } from '@shared/ui/Container';
import { ProductDetails } from '@widgets/ProductDetails';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {
	const params = useParams();
	const id = params?.id as string;
	const { data: product, isLoading } = useGetProduct(id);

	return (
		<section className={classNames('section-padding', {}, [className])}>
			<Container>
				<ProductDetails currentProduct={product} isLoading={isLoading} />
			</Container>
		</section>
	);
};

export { SectionIntro };