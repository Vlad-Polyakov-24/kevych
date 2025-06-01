import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { Field, Input as HeadlessInput, Label } from '@headlessui/react'
import { classNames, type Mods } from '@shared/lib/classNames';
import { ErrorMessage } from '@shared/ui/ErrorMessage';
import styles from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	className?: string;
	label?: string;
	onChange?: (value: string) => void;
	error?: string;
}

const Input = (props: InputProps) => {
	const { className, label, error, onChange, ...rest } = props;
	const mods: Mods = {
		[styles.error]: error,
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<Field className={classNames(styles.field, mods, [className])}>
			{label && <Label className={styles.field__label}>{label}</Label>}
			<HeadlessInput
				className={styles.field__input}
				onChange={handleOnChange}
				{...rest}
			/>
			{error && <ErrorMessage message={error} />}
		</Field>
	);
};

export default Input;