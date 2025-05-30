'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { deleteCookie } from 'cookies-next/client';
import { userStore } from '@entities/User';
import { cookieVars } from '@shared/const/cookieVars';
import { Routes } from '@shared/const/routes';

const useLogout = () => {
	const router = useRouter();
	const { resetState } = userStore();

	const logout = useCallback(() => {
		void deleteCookie(cookieVars.TOKENS);
		resetState();
		void router.push(Routes.LOGIN);
	}, [router, resetState]);

	return { logout };
};

export { useLogout };