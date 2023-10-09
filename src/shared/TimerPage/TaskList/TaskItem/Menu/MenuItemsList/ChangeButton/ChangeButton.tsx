import React, { useContext } from 'react';
import styles from './changebutton.css';
import { ChangeIcon } from '../../../../../../Icons';
import { Button } from '../Button';
import { controlContext } from '../../../../../../context/controlContext';

export function ChangeButton() {
	const { setisChangeInput } = useContext(controlContext);

	return (
		<Button
			onClick={() => setisChangeInput(true)}
			icon={<ChangeIcon />}
			text={'Редактировать'}
		/>
	);
}
