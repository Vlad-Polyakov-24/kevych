'use client';

import { useCallback } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { appStore } from '@entities/App';
import styles from './Hamburger.module.scss';

type HamburgerProps = {
	className?: string;
};

const Hamburger = ({ className }: HamburgerProps) => {
	const isHamburgerMenu = appStore((state) => state.isHamburgerMenu);
	const set = appStore((state) => state.set);

	const handleToggleMenu = useCallback(() => {
		set({ isHamburgerMenu: !isHamburgerMenu });
	}, [set, isHamburgerMenu]);

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			size={ButtonSize.CUSTOM}
			className={classNames(styles.hamburger, { [styles.open]: isHamburgerMenu }, [className])}
			onClick={handleToggleMenu}
		>
			<span />
			<span />
			<span />
		</Button>
	);
};

export default Hamburger;