'use client';

import { classNames } from '@shared/lib/classNames';
import { useLogout } from '@entities/User';
import { Container } from '@shared/ui/Container';
import { Button } from '@shared/ui/Button';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => {
	const { logout } = useLogout();

	return (
		<header className={classNames(styles.header, {}, [className])}>
			<Container>
				<Button onClick={logout}>
					Logout
				</Button>
			</Container>
		</header>
	);
};

export default Header;