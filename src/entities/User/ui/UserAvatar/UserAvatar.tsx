'use client';

import { Avatar } from '@shared/ui/Avatar';
import { userStore } from '@entities/User';

type UserAvatarProps = {
	className?: string;
};

const UserAvatar = ({ className }: UserAvatarProps) => {
	const currentUser = userStore((state) => state.currentUser);
	const { image, username } = currentUser || {};

	return (
		<Avatar
			src={image}
			alt={username}
			size={60}
			className={className}
			priority
		/>
	);
};

export default UserAvatar;