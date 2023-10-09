import React from 'react';
import styles from './pause.css';
import { PauseIcon } from '../../Icons/PauseIcon';
import { getHoursAndMins } from '../../../utils/js/getHoursAndMins';

interface IPause {
	pauseTime: number;
}

export function Pause({ pauseTime }: IPause) {
	return (
		<div
			className={
				!pauseTime ? styles.container : `${styles.container} ${styles.active}`
			}
		>
			<h2 className={styles.heading}>Время на паузе</h2>
			<p className={styles.value}>
				{!pauseTime ? '0' : getHoursAndMins(pauseTime)}
			</p>
			<div className={styles.image}>
				<PauseIcon active={pauseTime ? true : false} />
			</div>
		</div>
	);
}
