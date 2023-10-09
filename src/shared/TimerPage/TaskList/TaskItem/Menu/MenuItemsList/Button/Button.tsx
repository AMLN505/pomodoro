import React from 'react';
import styles from './button.css';
import { stopPropagation } from '../../../../../../../utils/react/stopPropagation';

interface IButton {
	onClick: () => void;
	icon?: React.ReactNode;
	text?: string;
	disabled?: boolean;
}

const NOOP = () => {};

export function Button({
	onClick = NOOP,
	icon,
	text,
	disabled = false,
}: IButton) {
	return (
		<button
			className={styles.button}
			onClick={stopPropagation(onClick)}
			disabled={disabled}
		>
			{icon}
			<span className={styles.text}>{text}</span>
		</button>
	);
}
