'use client';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from '../../model/hooks/useLogin';
import { FlexV } from '@shared/ui/Stack';
import { Input } from '@shared/ui/Input';
import { Button, ButtonTheme } from '@shared/ui/Button';
import { Loader, LoaderTheme } from '@shared/ui/Loader';
import { loginSchema } from '@shared/config/validation/validationSchemas';
import { defaultValues, fields } from '../../model/data/authForm.data';
import type { ICredentials } from '@entities/User';

type AuthFormProps = {
	className?: string;
};

const AuthForm = ({ className }: AuthFormProps) => {
	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues,
		resolver: yupResolver(loginSchema),
	});
	const { mutateAsync: login, isPending } = useLogin();

	const onSubmit = async (data: ICredentials) => {
		await login(data);
	};

	return (
		<FlexV
			as={'form'}
			align={'stretch'}
			justify={'stretch'}
			gap={'12'}
			className={className}
			onSubmit={handleSubmit(onSubmit)}
		>
			{fields.map(({ name, ...rest }) => (
				<Controller
					key={name}
					name={name}
					control={control}
					render={({ field }) => (
						<Input {...field} {...rest} error={errors?.[name]?.message} />
					)}
				/>
			))}
			<Button theme={ButtonTheme.DARK} type={'submit'}>Login</Button>
			{isPending && <Loader theme={LoaderTheme.OVERLAY} />}
		</FlexV>
	);
};

export default AuthForm;