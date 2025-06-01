import type { CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './ErrorMessage.module.scss';

type ErrorMessageProps = {
	className?: string;
	style?: CSSProperties;
	message: string;
};

const ErrorMessage = ({ className, style, message }: ErrorMessageProps) => (
	<span className={classNames(styles.message, {}, [className])} style={style}>{message}</span>
);

export default ErrorMessage;