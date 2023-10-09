import React, { useContext, useEffect } from 'react';
import styles from './timer.css';
import { timerContext } from '../../../context/timerContext';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
	EType,
	IStatistics,
	ITask,
	addStats,
	updateBreakCounter,
	updateTask,
} from '../../../../store/reducers/toolkitSlice';
import { getWeekNumber } from '../../../../utils/js/getWeekNumber';
import { getWeekDay } from '../../../../utils/js/getWeekDay';
import { AddTimeButton } from './AddTimeButton';

interface ITimer {
	tasks: Array<ITask>;
	id: string;
	progress: number;
	tomatoes: number;
}

export function Timer({ id, tasks, progress, tomatoes }: ITimer) {
	const dispatch = useAppDispatch();

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

	const {
		breakTime,
		workTime,
		longBreakTime,
		breakCounter,
		breaksFreq,
		notify,
	} = useAppSelector((state) => state.timerParams);

	const { isWork, setIsWork, isActive, setIsActive, time, setTime } =
		useContext(timerContext);

	function showNotification(body: string) {
		if (notify) {
			const not = new Notification('Pomodoro_box', {
				body: body,
				icon: 'https://img.freepik.com/free-vector/fresh-tomato_1053-566.jpg?w=2000',
			});
			const sound = new Audio(
				'https://btones.b-cdn.net/fetch/59/5980d6d84fdde2c38b7d87250384d4e8.mp3'
			);
			sound.play();
		}
	}

	function tick() {
		if (!isActive) {
			return;
		}

		if (time[0] === 0 && time[1] === 0) {
			setIsActive(false);
			if (isWork) {
				showNotification('Пора отдыхать!');

				addStatsItem(EType.tomatoes, 1);

				if (progress + 1 === tomatoes) {
					const newTasks = tasks.filter(
						(task) => task.progress + 1 !== task.tomatoes
					);
					dispatch(updateTask(newTasks));
				}

				setIsWork(false);
				dispatch(updateBreakCounter(breakCounter + 1));
				(breakCounter + 1) % breaksFreq == 0 &&
				breakCounter + 1 > breaksFreq - 1
					? setTime([longBreakTime, 0])
					: setTime([breakTime, 0]);
			} else {
				showNotification('Пора работать!');
				setIsWork(true);
				setTime([workTime, 0]);
				const newTasks = tasks.map((task) =>
					task.id === id ? { ...task, progress: task.progress + 1 } : task
				);
				dispatch(updateTask(newTasks));
			}
		} else if (time[1] == 0) {
			setTime([time[0] - 1, 59]);
		} else {
			setTime([time[0], time[1] - 1]);
		}
	}

	useEffect(() => {
		const timer = setInterval(() => tick(), 1000);
		return () => clearInterval(timer);
	});

	useEffect(() => {
		setTime([workTime, 0]);
		setIsActive(false);
		setIsWork(true);
	}, [id]);

	return (
		<div className={styles.timer}>
			<div
				className={styles.timerValue}
				style={{
					color:
						isWork && isActive
							? 'var(--colorDC3E22)'
							: !isWork && isActive
							? 'var(--colorA8B64F)'
							: 'var(--color333333)',
				}}
			>
				{time[0].toString().padStart(2, '0')}:
				{time[1].toString().padStart(2, '0')}
				<AddTimeButton />
			</div>
		</div>
	);
}
