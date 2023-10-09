import React from 'react';
import styles from './tomatoes.css';
import { LogoIcon, TomatoesWrapIcon } from '../../Icons';

interface ITomatoes {
	tomatoes: number;
}

export function Tomatoes({ tomatoes }: ITomatoes) {
	return tomatoes === 0 ? (
		<div className={styles.empty}>
			<TomatoesWrapIcon />
		</div>
	) : (
		<div className={styles.container}>
			<div className={styles.top}>
				<LogoIcon size={80} />
				<span className={styles.counter}>x {tomatoes}</span>
			</div>
			<div className={styles.bottom}>Помидоры: {tomatoes}</div>
		</div>
	);
}
