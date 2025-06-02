import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Text, TextColor, TextSize } from '@shared/ui/Text';
import { Tag } from '@shared/ui/Tag';
import { BackButton } from '@features/BackButton';
import type { IProduct } from '@entities/Product';
import styles from './ProductRead.module.scss';

type ProductReadProps = {
	className?: string;
	currentProduct: IProduct;
};

const ProductRead = (props: ProductReadProps) => {
	const {
		className,
		currentProduct: { images, thumbnail, title, description, category, price, brand, rating, tags },
	} = props;

	return (
		<FlexH
			align={'center'}
			gap={'12'}
			className={classNames(styles.details, {}, [className])}
			wrap
		>
			<Image
				className={styles.details__img}
				src={images[0] || thumbnail}
				alt={title}
				width={300}
				height={300}
				priority
			/>
			<FlexV
				justify={'stretch'}
				align={'stretch'}
				gap={'12'}
				className={styles.details__inner}
			>
				<BackButton style={{ alignSelf: 'flex-start' }} />
				<Text
					title={title}
					text={description}
					color={TextColor.DARK}
				/>
				<FlexH as={'ul'} gap={'8'} align={'center'} justify={'between'} wrap>
					<li><span className={'fw-600'}>Category:</span> {category}</li>
					<li><span className={'fw-600'}>Brand:</span> {brand}</li>
					<li><span className={'fw-600'}>Rating:</span> {rating}</li>
				</FlexH>
				{tags && tags.length > 0 && (
					<FlexH as={'ul'} gap={'8'} align={'center'} wrap>
						{tags.map((tag) => (
							<Tag as={'li'} key={tag} tag={tag} />
						))}
					</FlexH>
				)}
				<Text
					text={`Price: $${price}`}
					color={TextColor.DARK}
					size={TextSize.L}
				/>
			</FlexV>
		</FlexH>
	);
};

export { ProductRead };