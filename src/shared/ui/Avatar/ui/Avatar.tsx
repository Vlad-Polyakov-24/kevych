import Image, { type StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Avatar.module.scss';
import avatarDefault from '@shared/assets/images/avatar_default.png';

type AvatarProps = {
	className?: string;
	src?: string | StaticImageData;
	alt?: string;
	size?: number;
	priority?: boolean;
};

const Avatar = (props: AvatarProps) => {
	const { className, src, alt = 'avatar', size = 100, priority } = props;
	const style: CSSProperties = {
		width: size,
		height: size,
	};
	const avatarSrc = src || avatarDefault;

	return (
		<span className={classNames(styles.avatar, {}, [className])} style={style}>
			<Image
				src={avatarSrc}
				alt={alt}
				priority={priority}
				className={styles.avatar__img}
				sizes={`${size}px`}
				fill
			/>
		</span>
	);
};

export default Avatar;