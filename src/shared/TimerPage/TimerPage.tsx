import React from 'react';
import styles from './timerpage.css';
import { Description } from './Description';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';
import { TaskTimer } from './TaskTimer';
import { useAppSelector } from '../../hooks/redux';

export function TimerPage() {
	const currentTask = useAppSelector((state) => state.timerParams.currentTask);

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h1 className={styles.heading}>Ура! Теперь можно начать работать:</h1>
				<Description />
				<AddTask />
				<TaskList />
			</div>
			<div className={styles.right}>{currentTask && <TaskTimer />}</div>
		</div>
	);
}
