import React from 'react';
import styles from './addtask.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { addTask } from '../../../store/reducers/toolkitSlice';
import { generateRandomIndex } from '../../../utils/react/generateRandomIndex';

type Inputs = {
	taskName: string;
};

export function AddTask() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Inputs>();

	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(
			addTask({
				name: data.taskName,
				tomatoes: 1,
				id: generateRandomIndex(),
				progress: 0,
				done: false,
			})
		);
		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<input
				aria-invalid={errors.taskName ? 'true' : undefined}
				type="text"
				className={styles.input}
				placeholder="Название задачи"
				{...register('taskName', {
					minLength: 3,
					required: true,
				})}
			/>
			<button className={styles.button} type="submit">
				Добавить
			</button>
		</form>
	);
}
