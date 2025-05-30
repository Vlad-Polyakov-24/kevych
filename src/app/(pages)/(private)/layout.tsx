import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';
import { getParsedTokensFromCookie } from '@shared/lib/checkTokens';
import { Header } from '@widgets/Header';
import { Routes } from '@shared/const/routes';

interface PrivateLayoutProps {
	children: ReactNode;
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
	const tokens = await getParsedTokensFromCookie();

	if (!tokens?.accessToken) {
		redirect(Routes.LOGIN);
	}

	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default PrivateLayout;
