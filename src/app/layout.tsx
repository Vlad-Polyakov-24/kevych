import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@globals/providers/ErrorBoundary';
import { FlexV } from '@shared/ui/Stack';
import '@globals/styles/index.scss';

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Kevych Solutions',
	description: 'Developed by Vlad Poliakov',
	// icons: {
	// 	icon: '/favicon.ico',
	// 	apple: '/apple-touch-icon.png',
	// },
};

interface IRootLayout {
	children: ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {

	return (
		<html lang={'en'}>
		<body className={`${roboto.variable}`}>
		<ErrorBoundary>
			<FlexV as={'main'} align={'stretch'} justify={'stretch'} grow>
				{children}
			</FlexV>
		</ErrorBoundary>
		<ToastContainer theme={'light'} />
		</body>
		</html>
	);
};

export default RootLayout;
