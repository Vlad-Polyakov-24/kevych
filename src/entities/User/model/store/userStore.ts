import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { localStorageVars } from '@shared/const/localStorageVars';
import type { IUser } from '../types/User.types';

interface IUserStore {
	currentUser: Omit<IUser, 'refreshToken' | 'accessToken'> | null,
	set: (newState: Partial<IUserStore>) => void;
	resetState: () => void;
}

const userStore = create<IUserStore>()(
	persist(
		(set) => ({
			currentUser: null,
			set: (newState) => set((state) => ({ ...state, ...newState })),
			resetState: () => {
				set({
					currentUser: null,
				});
			},
		}),
		{
			name: localStorageVars.USER,
			storage: createJSONStorage(() => localStorage),
		},
	)
);

export { userStore };
