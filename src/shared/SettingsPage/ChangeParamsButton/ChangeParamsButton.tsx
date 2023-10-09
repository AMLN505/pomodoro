import React from 'react';
import styles from './changeparamsbutton.css';

interface IChangeParamsButton {
	heading: string;
	value: number;
	onClickDecrease: () => void;
	onClickIncrease: () => void;
}

export function ChangeParamsButton({
	heading,
	value,
	onClickDecrease,
	onClickIncrease,
}: IChangeParamsButton) {
	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>{heading}</h2>
			<div className={styles.content}>
				<button className={styles.button} onClick={onClickDecrease}>
					-
				</button>
				<div className={styles.value}>{value}</div>
				<button className={styles.button} onClick={onClickIncrease}>
					+
				</button>
			</div>
		</div>
	);
}
