import React from 'react';
import styles from './taskitem.css';
import { ControlContextProvider } from '../../../context/controlContext';
import { TaskItemContent } from './TaskItemContent';
import { updateCurrent } from '../../../../store/reducers/toolkitSlice';
import { useAppDispatch } from '../../../../hooks/redux';

interface ITask {
	name: string;
	id: string;
	tomatoes: number;
}

export function TaskItem({ name, id, tomatoes }: ITask) {
	const dispatch = useAppDispatch();

	return (
		<ControlContextProvider>
			<li
				className={styles.taskItem}
				onClick={() => dispatch(updateCurrent(id))}
			>
				<TaskItemContent taskName={name} id={id} tomatoes={tomatoes} />
			</li>
		</ControlContextProvider>
	);
}
