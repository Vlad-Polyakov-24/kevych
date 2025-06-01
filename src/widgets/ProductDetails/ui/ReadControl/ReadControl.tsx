'use client';

import { useCallback } from 'react';
import { useRemoveLocalProduct, useRemoveProduct } from '@entities/Product';
import { FlexH } from '@shared/ui/Stack';
import { Button, ButtonTheme } from '@shared/ui/Button';

type ReadControlProps = {
	className?: string;
	handleEdit: () => void;
	id: string | number;
};

const ReadControl = ({ className, handleEdit, id }: ReadControlProps) => {
	const { mutate: removeProduct } = useRemoveProduct();
	const removeLocalProduct = useRemoveLocalProduct();

	const handleRemove = useCallback(() => {
		if (+id > 1000) {
			removeLocalProduct(+id);
		} else {
			removeProduct(id);
		}
	}, [id, removeLocalProduct, removeProduct]);

	return (
		<FlexH
			gap={'12'}
			align={'center'}
			justify={'end'}
			className={className}
		>
			<Button theme={ButtonTheme.DARK} onClick={handleEdit}>
				Edit
			</Button>
			<Button theme={ButtonTheme.DARK} onClick={handleRemove}>
				Remove
			</Button>
		</FlexH>
	);
};

export { ReadControl };