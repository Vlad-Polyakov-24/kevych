import { create } from 'zustand';

interface IAppStore {
	isHamburgerMenu: boolean;
	set: (newState: Partial<IAppStore>) => void;
	resetState: () => void;
}

const appStore = create<IAppStore>()(
	(set) => ({
		isHamburgerMenu: false,
		set: (newState) => set((state) => ({ ...state, ...newState })),
		resetState: () => {
			set({
				isHamburgerMenu: false,
			});
		},
	}),
);

export { appStore };
