import { cookies } from 'next/headers';
import { cookieVars } from '@shared/const/cookieVars';
import type { ITokens } from '@entities/User';

export const getParsedTokensFromCookie = async (): Promise<ITokens | null> => {
	const cookieStore = await cookies();
	const tokenRaw = cookieStore.get(cookieVars.TOKENS)?.value;

	if (!tokenRaw) return null;

	try {
		return JSON.parse(tokenRaw);
	} catch {
		return null;
	}
};