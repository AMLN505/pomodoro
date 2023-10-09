import React from 'react';
import styles from './changenotify.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeNotify } from '../../../store/reducers/toolkitSlice';
import { DisableNotifyIcon, NotifyIcon } from '../../Icons';

export function ChangeNotify() {
	const dispatch = useAppDispatch();
	const isNotify = useAppSelector((state) => state.timerParams.notify);

	function handleClick() {
		dispatch(changeNotify(!isNotify));
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>Уведомления</h2>
			<button className={styles.button} onClick={handleClick}>
				{isNotify ? <NotifyIcon /> : <DisableNotifyIcon />}
			</button>
		</div>
	);
}
