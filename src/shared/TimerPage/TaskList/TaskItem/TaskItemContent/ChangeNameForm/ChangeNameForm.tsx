import React, { useContext } from 'react';
import styles from './changenameform.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useModal } from '../../../../../../hooks/useModal';
import { controlContext } from '../../../../../context/controlContext';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../../hooks/redux';
import { updateTask } from '../../../../../../store/reducers/toolkitSlice';

type Inputs = {
	taskName: string;
};

interface IChangeNameForm {
	taskName: string;
	taskId: string;
}

export function ChangeNameForm({ taskName, taskId }: IChangeNameForm) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const { setisChangeInput } = useContext(controlContext);

	const [ref] = useModal(() => setisChangeInput(false));

	const tasks = useAppSelector((state) => state.tasks);
	const dispatch = useDispatch();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const newTasks = tasks.map((task) =>
			task.id === taskId ? { ...task, name: data.taskName } : task
		);

		dispatch(updateTask(newTasks));
	};

	return (
		<div className={styles.formContainer} ref={ref}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<input
					autoFocus
					aria-invalid={errors.taskName ? 'true' : undefined}
					type="text"
					className={styles.input}
					{...register('taskName', {
						minLength: 3,
						required: true,
						value: taskName,
					})}
				/>
			</form>
		</div>
	);
}
