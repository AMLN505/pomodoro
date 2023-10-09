import React from 'react';
import styles from './timerdescr.css';

interface ITimerDescr {
	index: number;
	name: string;
}

export function TimerDescr({ index, name }: ITimerDescr) {
	return (
		<div className={styles.descr}>
			<span className={styles.number}>Задача {index}</span> -{' '}
			<span className={styles.name}>{name}</span>
		</div>
	);
}
