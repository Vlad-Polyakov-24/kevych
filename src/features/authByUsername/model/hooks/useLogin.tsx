'use client';

import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next/client';
import { useMutation } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { userApi, userStore, type ITokens } from '@entities/User';
import { cookieVars } from '@shared/const/cookieVars';
import { Routes } from '@shared/const/routes';

const useLogin = () => {
	const router = useRouter();
	const { set } = userStore();

	const { mutate, mutateAsync, isPending, isError, isSuccess } = useMutation({
		mutationFn: userApi.login,
		onSuccess: (data) => {
			const { refreshToken, accessToken, ...userWithoutTokens } = data;
			const tokens: ITokens = {
				accessToken: accessToken,
				refreshToken: refreshToken,
			};

			void setCookie(cookieVars.TOKENS, JSON.stringify(tokens), {
				maxAge: 60 * 60 * 24 * 7,
			});

			set({ currentUser: userWithoutTokens });

			void router.push(Routes.HOME);
		},
		onError: (error) => errorHandler(error),
	});

	return { mutate, mutateAsync, isPending, isSuccess, isError };
};

export { useLogin };