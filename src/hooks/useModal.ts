import { useEffect, useRef } from 'react';

export function useModal(onClose?: () => void) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClick(event: MouseEvent | TouchEvent) {
			if (
				event.target instanceof Node &&
				!ref.current?.contains(event.target)
			) {
				onClose?.();
			}
		}

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return [ref];
}
