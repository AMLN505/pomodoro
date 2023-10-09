import React, { useContext } from 'react';
import styles from './taskitemcontent.css';
import { controlContext } from '../../../../context/controlContext';
import { Menu } from '../Menu';
import { ChangeNameForm } from './ChangeNameForm';

interface ITaskContent {
	taskName: string;
	id: string;
	tomatoes: number;
}

export function TaskItemContent({ taskName, id, tomatoes }: ITaskContent) {
	const { isChangeInput } = useContext(controlContext);

	return (
		<div className={styles.content}>
			<span className={styles.tomatoes}>{tomatoes}</span>
			{isChangeInput ? (
				<ChangeNameForm taskName={taskName} taskId={id} />
			) : (
				<span className={styles.taskName}>{taskName}</span>
			)}
			<Menu taskId={id} />
		</div>
	);
}
