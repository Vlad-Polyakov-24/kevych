import { defaultValues } from '../data/authForm.data';

export interface IField {
	name: keyof typeof defaultValues,
	label: string,
	type?: string,
	placeholder?: string,
}