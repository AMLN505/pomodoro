import React from 'react';
import styles from './dropdown.css';
import { useModal } from '../../hooks/useModal';
import ReactDOM from 'react-dom';
import { stopPropagation } from '../../utils/react/stopPropagation';

interface IDropdownProps {
	button: React.ReactNode;
	children: React.ReactNode;
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
	button,
	children,
	isOpen,
	onOpen = NOOP,
	onClose = NOOP,
}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

	const [ref] = useModal(() => {
		setIsDropdownOpen(false);
		onClose;
	});

	const node = document.getElementById('modal-root');
	if (!node) {
		return null;
	}

	const handleOpen = () => {
		if (isOpen == undefined) {
			setIsDropdownOpen(!isDropdownOpen);
		}
	};

	React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
	React.useEffect(
		() => (isDropdownOpen ? onOpen() : onClose()),
		[isDropdownOpen]
	);

	return (
		<div className={styles.container}>
			<div onClick={stopPropagation(handleOpen)} ref={ref}>
				{button}
			</div>
			{isDropdownOpen &&
				ReactDOM.createPortal(
					<div
						className={styles.listContainer}
						style={{
							top:
								(ref.current?.getBoundingClientRect().y || 0) +
								window.scrollY +
								30,
							left:
								(ref.current?.getBoundingClientRect().x || 0) +
								window.scrollX +
								30,
						}}
					>
						<div
							className={styles.list}
							onClick={() => setIsDropdownOpen(false)}
						>
							{children}
						</div>
					</div>,
					node
				)}
		</div>
	);
}
