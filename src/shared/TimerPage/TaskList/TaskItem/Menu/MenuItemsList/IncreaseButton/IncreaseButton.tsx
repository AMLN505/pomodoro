import React from 'react';
import styles from './IncreaseButton.css';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../../../../hooks/redux';
import { updateTask } from '../../../../../../../store/reducers/toolkitSlice';
import { IncreaseIcon } from '../../../../../../Icons';
import { Button } from '../Button';

interface IIncreaseButton {
	taskId: string;
}

export function IncreaseButton({ taskId }: IIncreaseButton) {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector((state) => state.tasks);

	function handleClick() {
		const newTasks = tasks.map((task) =>
			task.id === taskId ? { ...task, tomatoes: task.tomatoes + 1 } : task
		);

		dispatch(updateTask(newTasks));
	}

	return (
		<Button onClick={handleClick} icon={<IncreaseIcon />} text={'Увеличить'} />
	);
}
