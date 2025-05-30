import axios from 'axios';
import { endpoints } from '@shared/const/endpoinst';
import type { ICredentials, IUser } from '../model/types/User.types';

export const userApi = {
	login: async (credentials: ICredentials): Promise<IUser> => {
		const { data } = await axios.post(endpoints.LOGIN, credentials);
		return data;
	},
};