import React from 'react';
import styles from './tasktimer.css';
import { useAppSelector } from '../../../hooks/redux';
import { TimerHead } from './TimerHead';
import { TimerDescr } from './TimerDescr';
import { TimerContextProvider } from '../../context/timerContext';
import { Timer } from './Timer';
import { TimerControl } from './TimerControl';

export function TaskTimer() {
	const currentTaskId = useAppSelector(
		(state) => state.timerParams.currentTask
	);
	const tasks = useAppSelector((state) => state.tasks);
	const currentTask = tasks.find((task) => task.id === currentTaskId);

	return (
		currentTask && (
			<div className={styles.timerContainer}>
				<TimerContextProvider>
					<TimerHead
						name={currentTask.name}
						progress={currentTask.progress + 1}
					/>
					<Timer
						tasks={tasks}
						id={currentTask.id}
						progress={currentTask.progress}
						tomatoes={currentTask.tomatoes}
					/>
					<TimerDescr
						name={currentTask.name}
						index={tasks.indexOf(currentTask) + 1}
					/>
					<TimerControl tasks={tasks} id={currentTask.id} />
				</TimerContextProvider>
			</div>
		)
	);
}
