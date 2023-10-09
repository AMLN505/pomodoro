import React, { useContext } from 'react';
import styles from './deletemodal.css';
import ReactDOM from 'react-dom';
import { useModal } from '../../../../../../../hooks/useModal';
import { CloseIcon } from '../../../../../../Icons';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../../../hooks/redux';
import { updateTask } from '../../../../../../../store/reducers/toolkitSlice';
import { controlContext } from '../../../../../../context/controlContext';

interface IDeleteModal {
	taskId?: string;
}

export function DeleteModal({ taskId }: IDeleteModal) {
	const node = document.getElementById('modal-root');
	if (!node) {
		return null;
	}

	const tasks = useAppSelector((state) => state.tasks);
	const dispatch = useDispatch();

	const { setIsDelModal } = useContext(controlContext);

	const [ref] = useModal(() => setIsDelModal(false));

	function handleClick() {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		dispatch(updateTask(newTasks));
	}

	function handleClose() {
		setIsDelModal(false);
	}

	return ReactDOM.createPortal(
		<div className={styles.modalWrapper}>
			<div className={styles.modal} ref={ref}>
				<h2 className={styles.heading}>Удалить задачу?</h2>
				<button onClick={handleClick} className={styles.aproveButton}>
					Удалить
				</button>
				<button className={styles.cancelButton} onClick={handleClose}>
					Отмена
				</button>
				<button className={styles.closeButton} onClick={handleClose}>
					<CloseIcon />
				</button>
			</div>
		</div>,
		node
	);
}
