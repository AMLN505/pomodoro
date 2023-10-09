import React, { useContext } from 'react';
import styles from './deletebutton.css';
import { DeleteIcon } from '../../../../../../Icons';
import { Button } from '../Button';
import { controlContext } from '../../../../../../context/controlContext';

export function DeleteButton() {
	const { setIsDelModal } = useContext(controlContext);

	return (
		<Button
			onClick={() => setIsDelModal(true)}
			icon={<DeleteIcon />}
			text={'Удалить'}
		/>
	);
}
