import type { IField } from '../types/AuthForm.types';

export const defaultValues = {
	username: '',
	password: '',
};

export const fields: IField[] = [
	{
		name: 'username',
		label: 'Username',
		placeholder: 'John Doe',
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		placeholder: '⋆⋆⋆⋆⋆⋆',
	},
];