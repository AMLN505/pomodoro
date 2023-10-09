import React from 'react';
import styles from './statisticlink.css';
import { StatisticsIcon } from '../../Icons';
import { Link } from 'react-router-dom';

export function StatisticLink() {
	return (
		<Link to={'pomodoro/statistics'} className={styles.link}>
			<StatisticsIcon />
			<span className={styles.text}>Статистика</span>
		</Link>
	);
}
