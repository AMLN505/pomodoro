import React from 'react';
import styles from './settingslink.css';
import { Link } from 'react-router-dom';
import { SettingsIcon } from '../../Icons';

export function SettingsLink() {
	return (
		<Link to={'pomodoro/settings'} className={styles.link}>
			<SettingsIcon />
			<span className={styles.text}>Настройки</span>
		</Link>
	);
}
