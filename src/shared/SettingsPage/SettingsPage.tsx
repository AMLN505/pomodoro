import React from 'react';
import styles from './settingspage.css';
import { ChangeTomatoTime } from './ChangeTomatoTime';
import { ChangeBreakTime } from './ChangeBreakTime';
import { ChangeLongBreakTime } from './ChangeLongBreakTime';
import { ChangeBreaksFreq } from './ChangeBreaksFreq';
import { ChangeNotify } from './ChangeNotify';

export function SettingsPage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Настройки таймера</h1>
			<div className={styles.grid}>
				<ChangeTomatoTime />
				<ChangeBreakTime />
				<ChangeLongBreakTime />
				<ChangeBreaksFreq />
				<ChangeNotify />
			</div>
		</div>
	);
}
