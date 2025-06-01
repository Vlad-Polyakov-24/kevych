'use client';

import { Fragment, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { classNames } from '@shared/lib/classNames';
import { generateDefaultValues } from '../../model/lib/generateDefaultValues';
import { FlexH, FlexV } from '@shared/ui/Stack';
import { Input } from '@shared/ui/Input';
import { Textarea } from '@shared/ui/Textarea';
import { CategorySelect } from '@entities/Category';
import { Button, ButtonTheme } from '@shared/ui/Button';
import { Loader, LoaderTheme } from '@shared/ui/Loader';
import { editSchema } from '@shared/config/validation/validationSchemas';
import { fields } from '../../model/data/productForm.data';
import { useCreateProduct, useEditLocalProduct, useEditProduct, type IProduct } from '@entities/Product';
import { Routes } from '@shared/const/routes';
import type { ISelectOptions } from '@shared/ui/Select';
import type { IProductForm } from '../../model/types/ProductDetails.types';
import styles from './ProductForm.module.scss';

const MultiSelect = dynamic(
	() => import('@shared/ui/MultiSelect/ui/MultiSelect'), { ssr: false }
);

type ProductFormProps = {
	className?: string;
	currentProduct?: IProduct;
	handleCancel?: () => void;
};

const ProductForm = (props: ProductFormProps) => {
	const { className, currentProduct, handleCancel } = props;
	const router = useRouter();
	const status = !!currentProduct ? 'edit' : 'create';

	const { control, handleSubmit, formState: { errors } } = useForm<IProductForm>({
		defaultValues: generateDefaultValues(currentProduct),
		resolver: yupResolver(editSchema),
	});

	const { mutate: editProduct } = useEditProduct();
	const editLocalProduct = useEditLocalProduct();
	const { mutateAsync: createProduct, isPending } = useCreateProduct();

	const tagOptions: ISelectOptions[] = useMemo(() =>
		(currentProduct?.tags || []).map(tag => ({ value: tag, label: tag })),
		[currentProduct?.tags]
	);

	const handlersMap = {
		edit: (data: IProductForm) => {
			const updatedProduct: Partial<IProduct> = {
				...currentProduct,
				...data,
				price: +data.price,
				images: [data.thumbnail],
			};

			if (currentProduct && currentProduct.id > 1000) {
				editLocalProduct(updatedProduct as IProduct);
			} else {
				editProduct(updatedProduct);
			}

			handleCancel?.();
		},
		create: async (data: IProductForm) => {
			const newProduct: Partial<IProduct> = {
				...data,
				price: +data.price,
				rating: 0,
				images: [data.thumbnail],
			};

			await createProduct(newProduct);
			router.push(Routes.HOME);
		},
	};

	return (
		<>
			<FlexV
				as={'form'}
				align={'stretch'}
				justify={'stretch'}
				gap={'10'}
				className={classNames(styles.form, {}, [className])}
				onSubmit={handleSubmit(handlersMap[status])}
			>
				{fields.map(({ name, type, ...rest }) => (
					<Fragment key={name}>
						{type === 'textarea' ? (
							<Controller
								name={name}
								control={control}
								render={({ field }) => (
									<Textarea {...field} {...rest} error={errors?.[name]?.message} />
								)}
							/>
						) : (
							<Controller
								name={name}
								control={control}
								render={({ field }) => (
									<Input
										{...field}
										{...rest}
										error={errors?.[name]?.message}
										type={type}
									/>
								)}
							/>
						)}
					</Fragment>
				))}
				<div className={styles.form__row}>
					<Controller
						name={'category'}
						control={control}
						render={({ field }) => (
							<CategorySelect
								{...field}
								label={'Category'}
								error={errors?.category?.message}
							/>
						)}
					/>
					<Controller
						name={'tags'}
						control={control}
						render={({ field }) => (
							<MultiSelect
								{...field}
								label={'Tags'}
								options={tagOptions}
								error={errors?.tags?.message}
							/>
						)}
					/>
				</div>
				<FlexH align={'center'} justify={'center'} gap={'12'}>
					<Button type={'submit'} theme={ButtonTheme.DARK}>
						{status === 'edit' ? 'Save' : 'Create'}
					</Button>
					{status === 'edit' && (
						<Button type={'button'} theme={ButtonTheme.DARK} onClick={handleCancel}>
							Cancel
						</Button>
					)}
				</FlexH>
			</FlexV>
			{isPending && <Loader theme={LoaderTheme.OVERLAY} />}
		</>
	);
};

export { ProductForm };