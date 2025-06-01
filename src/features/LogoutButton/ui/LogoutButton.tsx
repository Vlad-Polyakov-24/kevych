'use client';

import { useLogout } from '@entities/User';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';

type LogoutButtonProps = {
	className?: string;
};

const LogoutButton = ({ className }: LogoutButtonProps) => {
	const { logout } = useLogout();

	return (
		<Button theme={ButtonTheme.DARK} size={ButtonSize.S} onClick={logout} className={className}>
			Logout
		</Button>
	);
};

export default LogoutButton;