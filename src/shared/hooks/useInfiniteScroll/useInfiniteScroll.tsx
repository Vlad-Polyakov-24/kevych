import { useEffect, useRef } from 'react';

interface UseInfiniteScrollProps {
	hasNextPage: boolean;
	isFetchingNextPage: boolean;
	fetchNextPage: () => void;
}

export const useInfiniteScroll = ({ hasNextPage, isFetchingNextPage, fetchNextPage }: UseInfiniteScrollProps) => {
	const observerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!hasNextPage || isFetchingNextPage) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				void fetchNextPage();
			}
		});

		const el = observerRef.current;
		if (el) observer.observe(el);

		return () => {
			if (el) observer.unobserve(el);
		};
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

	return observerRef;
};