import React, { useContext } from 'react';
import styles from './timercontrol.css';
import { timerContext } from '../../../context/timerContext';
import {
	EType,
	IStatistics,
	ITask,
	addStats,
	updateTask,
} from '../../../../store/reducers/toolkitSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { getWeekNumber } from '../../../../utils/js/getWeekNumber';
import { getWeekDay } from '../../../../utils/js/getWeekDay';
import { TimerControlButtons } from './TimerControlButtons';

interface ITimerControl {
	tasks: Array<ITask>;
	id: string;
}

export function TimerControl({ tasks, id }: ITimerControl) {
	const {
		isWork,
		setIsWork,
		isActive,
		setIsActive,
		isPaused,
		setIsPaused,
		setTime,
	} = useContext(timerContext);

	const workTime = useAppSelector((state) => state.timerParams.workTime);
	const dispatch = useAppDispatch();

	function onDone() {
		const newTasks = tasks.filter((task) => task.id !== id);
		dispatch(updateTask(newTasks));
	}

	function onPause() {
		setIsPaused(true);
		setIsActive(false);
	}

	function onResume() {
		setIsPaused(false);
		setIsActive(true);
	}

	function addStatsItem(type: EType, value: number) {
		const date = new Date();
		const statItem: IStatistics = {
			week: getWeekNumber(date),
			day: getWeekDay(date),
			type: type,
			value: value,
		};

		dispatch(addStats(statItem));
	}

	function onStop() {
		setTime([workTime, 0]);
		setIsActive(false);
		addStatsItem(EType.stops, 1);
	}

	function onSkip() {
		setIsPaused(false);
		onStop();
		setIsWork(true);
		const newTasks = tasks.map((task) =>
			task.id === id ? { ...task, progress: task.progress + 1 } : task
		);
		dispatch(updateTask(newTasks));
	}

	let workTimeCounter = 0;
	let pauseTimeCounter = 0;

	React.useEffect(() => {
		const timer = setInterval(() => {
			if (isActive) {
				++workTimeCounter;
			}
		}, 1000);
		return () => {
			if (workTimeCounter !== 0) {
				addStatsItem(EType.workTime, workTimeCounter);
			}
			clearInterval(timer);
		};
	}, [isActive]);

	React.useEffect(() => {
		const timer = setInterval(() => {
			if (isPaused) {
				++pauseTimeCounter;
			}
		}, 1000);
		return () => {
			if (pauseTimeCounter !== 0) {
				addStatsItem(EType.pauseTime, pauseTimeCounter);
			}
			clearInterval(timer);
		};
	}, [isPaused]);

	return (
		<div className={styles.control}>
			{isWork &&
				!isActive &&
				(isPaused ? (
					<TimerControlButtons
						greenButtonOnClick={onResume}
						greenButtonText="Продолжить"
						hollowButtonOnClick={onDone}
						hollowButtonText="Сделано"
					/>
				) : (
					<TimerControlButtons
						greenButtonOnClick={() => setIsActive(true)}
						greenButtonText="Старт"
						hollowButtonOnClick={() => {}}
						hollowButtonText="Стоп"
						hollowButtonDisabled={true}
					/>
				))}
			{isWork && isActive && (
				<TimerControlButtons
					greenButtonOnClick={onPause}
					greenButtonText="Пауза"
					hollowButtonOnClick={onStop}
					hollowButtonText="Стоп"
				/>
			)}
			{!isWork &&
				!isActive &&
				(isPaused ? (
					<TimerControlButtons
						greenButtonOnClick={onResume}
						greenButtonText="Продолжить"
						hollowButtonOnClick={onSkip}
						hollowButtonText="Пропустить"
					/>
				) : (
					<TimerControlButtons
						greenButtonOnClick={() => setIsActive(true)}
						greenButtonText="Старт"
						hollowButtonOnClick={onSkip}
						hollowButtonText="Пропустить"
					/>
				))}
			{!isWork && isActive && (
				<TimerControlButtons
					greenButtonOnClick={onPause}
					greenButtonText="Пауза"
					hollowButtonOnClick={onSkip}
					hollowButtonText="Пропустить"
				/>
			)}
		</div>
	);
}
