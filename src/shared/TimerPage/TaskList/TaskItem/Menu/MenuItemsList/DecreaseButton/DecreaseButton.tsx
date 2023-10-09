import React from 'react';
import styles from './IncreaseButton.css';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../../../../hooks/redux';
import { updateTask } from '../../../../../../../store/reducers/toolkitSlice';
import { DecreaseIcon } from '../../../../../../Icons';
import { Button } from '../Button';

interface IDecreaseButton {
	taskId: string;
}

export function DecreaseButton({ taskId }: IDecreaseButton) {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector((state) => state.tasks);
	const tomatoesCounter = tasks.find((task) => task.id === taskId)?.tomatoes;

	function handleClick() {
		const newTasks = tasks.map((task) =>
			task.id === taskId ? { ...task, tomatoes: task.tomatoes - 1 } : task
		);

		dispatch(updateTask(newTasks));
	}

	return (
		<Button
			disabled={tomatoesCounter === 1 ? true : false}
			onClick={handleClick}
			icon={<DecreaseIcon />}
			text={'Уменьшить'}
		/>
	);
}
