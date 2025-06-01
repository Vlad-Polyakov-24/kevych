import * as yup from 'yup';

export const loginSchema = yup.object({
	username: yup.string().required('Username is required'),
	password: yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

export const editSchema = yup.object({
	title: yup.string().required('Field is required'),
	description: yup.string().min(50, 'Minimum 50 characters').required('Field is required'),
	category: yup.string().required('Field is required'),
	price: yup
		.string()
		.required('Field is required')
		.test('is-valid-price', 'Price must be at least 1$', (value) => {
			if (value === undefined || value === null || value.trim() === '') {
				return false;
			}

			const num = Number(value);

			return !isNaN(num) && num > 0;
		}),
	tags: yup
		.array()
		.of(yup.string().required('Each tag must be a string'))
		.min(0)
		.required('Field is required'),
	brand: yup.string().required('Field is required'),
	thumbnail: yup.string().required('Field is required'),
});