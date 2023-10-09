import React, { useContext } from 'react';
import styles from './addtimebutton.css';
import { AddTimeIcon } from '../../../../Icons';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { timerContext } from '../../../../context/timerContext';
import {
	changeBreakTime,
	changeLongBreakTime,
	changeWorkTime,
} from '../../../../../store/reducers/toolkitSlice';

export function AddTimeButton() {
	const dispatch = useAppDispatch();
	const { isWork } = useContext(timerContext);
	const { breakTime, workTime, longBreakTime, breakCounter, breaksFreq } =
		useAppSelector((state) => state.timerParams);

	function handleClick() {
		if (isWork) {
			dispatch(changeWorkTime(workTime + 1));
		} else {
			breakCounter % breaksFreq == 0 && breakCounter > breaksFreq - 1
				? dispatch(changeLongBreakTime(longBreakTime + 1))
				: dispatch(changeBreakTime(breakTime + 1));
		}
	}

	return (
		<button className={styles.button} onClick={handleClick}>
			<AddTimeIcon />
		</button>
	);
}
