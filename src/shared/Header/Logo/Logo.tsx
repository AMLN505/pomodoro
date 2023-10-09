import React from 'react';
import styles from './logo.css';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../Icons';

export function Logo() {
	return (
		<Link to={'pomodoro/timer'} className={styles.link}>
			<LogoIcon />
			<span className={styles.text}>pomodoro_box</span>
		</Link>
	);
}
