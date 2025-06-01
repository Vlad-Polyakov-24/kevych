import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { Field, Textarea as HeadlessTextarea, Label } from '@headlessui/react'
import { classNames, type Mods } from '@shared/lib/classNames';
import { ErrorMessage } from '@shared/ui/ErrorMessage';
import styles from './Textarea.module.scss';

interface TextareaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
	className?: string;
	label?: string;
	onChange?: (value: string) => void;
	error?: string;
}

const Textarea = (props: TextareaProps) => {
	const { className, label, error, onChange, ...rest } = props;
	const mods: Mods = {
		[styles.error]: error,
	};

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<Field className={classNames(styles.field, mods, [className])}>
			{label && <Label className={styles.field__label}>{label}</Label>}
			<HeadlessTextarea
				className={styles.field__textarea}
				onChange={handleOnChange}
				{...rest}
			/>
			{error && <ErrorMessage message={error} />}
		</Field>
	);
};

export default Textarea;