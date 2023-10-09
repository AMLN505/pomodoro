import React from 'react';
import styles from './worktime.css';
import { getHoursAndMins } from '../../../utils/js/getHoursAndMins';

interface IWorkTime {
	workTime: number;
	currentDay: string;
}

export function WorkTime({ workTime, currentDay }: IWorkTime) {
	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>{currentDay}</h2>
			{!workTime ? (
				<p className={styles.text}>Нет данных</p>
			) : (
				<p className={styles.text}>
					Вы работали над задачами в течение{' '}
					<span className={styles.time}>{getHoursAndMins(workTime)}</span>
				</p>
			)}
		</div>
	);
}
