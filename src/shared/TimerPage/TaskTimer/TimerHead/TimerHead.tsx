import React, { useContext } from 'react';
import styles from './timerhead.css';
import { timerContext } from '../../../context/timerContext';

interface ITimerHead {
	name: string;
	progress: number;
}

export function TimerHead({ name, progress }: ITimerHead) {
	const { isWork, isActive, isPaused } = useContext(timerContext);

	return (
		<div
			className={styles.timerHead}
			style={{
				backgroundColor:
					(isWork && isActive) || (isWork && isPaused)
						? 'var(--colorDC3E22)'
						: (!isWork && isActive) || (!isWork && isPaused)
						? 'var(--colorA8B64F)'
						: 'var(--grey-dark)',
			}}
		>
			<div className={styles.heading}>{name}</div>
			<div className={styles.progress}>Помидор {progress}</div>
		</div>
	);
}
