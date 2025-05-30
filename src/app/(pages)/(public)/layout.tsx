import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';
import { getParsedTokensFromCookie } from '@shared/lib/checkTokens';
import { Routes } from '@shared/const/routes';

interface PublicLayoutProps {
	children: ReactNode;
}

const PublicLayout = async ({ children }: PublicLayoutProps) => {
	const tokens = await getParsedTokensFromCookie();

	if (tokens?.accessToken) {
		redirect(Routes.HOME);
	}

	return (
		<>
			{children}
		</>
	);
};

export default PublicLayout;
