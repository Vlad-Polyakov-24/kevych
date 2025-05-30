'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useLockBodyScroll } from '@shared/hooks/useLockBodyScroll';
import { appStore } from '@entities/App';
import { navLinks } from '../model/data/nav.data';
import styles from './Nav.module.scss';

type NavProps = {
	className?: string;
};

const Nav = ({ className }: NavProps) => {
	const navRef = useRef<HTMLElement>(null);
	const pathname = usePathname();
	const isHamburgerMenu = appStore((state) => state.isHamburgerMenu);
	const set = appStore((state) => state.set);

	useLockBodyScroll(isHamburgerMenu, navRef);

	const handleMenuClick = useCallback(() => {
		set({ isHamburgerMenu: false });
	}, [set]);

	return (
		<nav ref={navRef} className={classNames(styles.nav, { [styles.open]: isHamburgerMenu }, [className])}>
			<ul className={styles.nav__list}>
				{navLinks.map(({ label, route, type }) => {
					const isActive = pathname === route;

					return (
						<li key={route} className={classNames(styles.nav__item, { [styles.active]: isActive })}>
							{type === 'cv' ? (
								<a
									href={route}
									target={'_blank'}
									rel={'noopener noreferrer'}
									className={styles.nav__link}
									onClick={handleMenuClick}
								>
									{label}
								</a>
							) : (
								<Link
									href={route}
									className={styles.nav__link}
									onClick={handleMenuClick}
								>
									{label}
								</Link>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;