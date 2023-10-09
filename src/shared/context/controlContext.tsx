import React, { useEffect, useState } from 'react';

export const controlContext = React.createContext<{
	isDelModal: boolean;
	setIsDelModal: React.Dispatch<React.SetStateAction<boolean>>;
	isChangeInput: boolean;
	setisChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	isDelModal: false,
	setIsDelModal: () => {},
	isChangeInput: false,
	setisChangeInput: () => {},
});

export function ControlContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDelModal, setIsDelModal] = useState(false);
	const [isChangeInput, setisChangeInput] = useState(false);

	useEffect(() => {
		if (isDelModal) {
			const pagePosition = window.scrollY;
			document.body.classList.add('disable-scroll');
			document.body.dataset.position = pagePosition.toString();
			document.body.style.top = -pagePosition + 'px';
		} else {
			const pagePosition = parseInt(
				document.body.dataset.position !== undefined
					? document.body.dataset.position
					: '0',
				10
			);
			document.body.style.top = 'auto';
			document.body.classList.remove('disable-scroll');
			window.scroll({ top: pagePosition, left: 0 });
			document.body.removeAttribute('data-position');
		}
	}, [isDelModal]);

	return (
		<controlContext.Provider
			value={{ isDelModal, setIsDelModal, isChangeInput, setisChangeInput }}
		>
			{children}
		</controlContext.Provider>
	);
}
