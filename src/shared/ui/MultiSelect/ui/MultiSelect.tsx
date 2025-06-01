'use client';

import { useCallback, useMemo } from 'react';
import CreatableSelect from 'react-select/creatable';
import type { MultiValue, Props as SelectProps } from 'react-select';
import { classNames } from '@shared/lib/classNames';
import { ErrorMessage } from '@shared/ui/ErrorMessage';
import type { ISelectOptions } from '@shared/ui/Select';
import styles from './MultiSelect.module.scss';

interface MultiSelectProps extends Omit<SelectProps<ISelectOptions, true>, 'onChange' | 'value'> {
	className?: string;
	label?: string;
	value?: string[];
	onChange?: (values: string[]) => void;
	options?: ISelectOptions[];
	error?: string;
}

const MultiSelect = (props: MultiSelectProps) => {
	const { className, label, onChange, options, error, value = [], ...rest } = props;

	const formattedValue = useMemo(
		() => value.map((val) => ({
			value: val,
			label: options?.find((opt) => opt.value === val)?.label || val,
		})),
		[value, options]
	);

	const handleChange = useCallback(
		(selectedOptions: MultiValue<ISelectOptions>) => {
			const newValues = selectedOptions.map((option) => option.value);
			onChange?.(newValues);
		},
		[onChange]
	);

	return (
		<label className={classNames(styles.field, {}, [className])}>
			{label && <span className={styles.field__label}>{label}</span>}
			<CreatableSelect
				isMulti
				value={formattedValue}
				options={options}
				onChange={handleChange}
				className={styles.field__select}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						minHeight: 32,
						borderWidth: 1,
						borderRadius: 4,
						borderColor: state.isFocused
							? 'var(--color-blue)'
							: error
								? 'var(--color-error)'
								: 'var(--color-dark)',
						boxShadow: 'none',
						backgroundColor: 'transparent',
						'&:hover': {
							boxShadow: 'none',
						},
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: state.isSelected ? 'rgba(59, 167, 255, .3)' : '',
						'&:hover': {
							backgroundColor: 'rgba(59, 167, 255, .3)',
						},
					}),
				}}
				{...rest}
			/>
			{error && <ErrorMessage message={error} />}
		</label>
	);
};

export default MultiSelect;