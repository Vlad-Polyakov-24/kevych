import { useEffect, type RefObject } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const useLockBodyScroll = (isLocked: boolean, targetRef: RefObject<HTMLElement | null>) => {
	useEffect(() => {
		const el = targetRef.current;
		if (!el) return;

		if (isLocked) {
			disableBodyScroll(el);
		} else {
			enableBodyScroll(el);
		}

		return () => enableBodyScroll(el);
	}, [isLocked, targetRef]);
};