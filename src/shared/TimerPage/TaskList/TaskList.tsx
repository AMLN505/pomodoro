import React from 'react';
import styles from './tasklist.css';
import { useAppSelector } from '../../../hooks/redux';
import { TaskItem } from './TaskItem';
import { getHoursAndMins } from '../../../utils/js/getHoursAndMins';

export function TaskList() {
	const tasks = useAppSelector((state) => state.tasks);
	const workTime = useAppSelector((state) => state.timerParams.workTime);

	const tasksDuration =
		tasks.reduce((acc, cur) => acc + cur.tomatoes, 0) * workTime;

	return (
		<ul className={styles.taskList}>
			{tasks.map((task) => (
				<TaskItem
					key={task.name}
					id={task.id}
					name={task.name}
					tomatoes={task.tomatoes}
				/>
			))}
			{tasksDuration !== 0 && (
				<p className={styles.totalTime}>{getHoursAndMins(tasksDuration)}</p>
			)}
		</ul>
	);
}
