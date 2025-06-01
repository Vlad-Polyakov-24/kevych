import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { UserAvatar } from '@entities/User';
import { Nav } from '@features/Nav';
import { Hamburger } from '@features/Hamburger';
import { LogoutButton } from '@features/LogoutButton';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => {

	return (
		<header className={classNames(styles.header, {}, [className])}>
			<Container display={'flex'} orientation={'horizontal'} className={styles.header__container}>
				<Nav className={'mr-a'} />
				<Hamburger className={'mr-a'} />
				<LogoutButton />
				<UserAvatar />
			</Container>
		</header>
	);
};

export default Header;