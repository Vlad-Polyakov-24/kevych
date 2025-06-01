import { Routes } from '@shared/const/routes';

export const navLinks = [
	{
		label: 'Home',
		route: Routes.HOME,
		type: 'page',
	},
	{
		label: 'Create Product',
		route: Routes.PRODUCT_CREATE,
		type: 'page',
	},
	{
		label: 'CV',
		route: '/files/cv.pdf',
		type: 'cv',
	},
];