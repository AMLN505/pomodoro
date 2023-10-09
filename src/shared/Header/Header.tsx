import React from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { StatisticLink } from './StatisticLink';
import { ThemeSwitcher } from './ThemeSwitcher';
import { SettingsLink } from './SettingsLink';
import { useAppSelector } from '../../hooks/redux';

export function Header() {
	const isNotify = useAppSelector((state) => state.timerParams.notify);

	if (isNotify) {
		Notification.requestPermission();
	}

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Logo />
				<ThemeSwitcher />
				<SettingsLink />
				<StatisticLink />
			</div>
		</header>
	);
}
