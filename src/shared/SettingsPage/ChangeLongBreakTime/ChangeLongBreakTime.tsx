import React from 'react';
import styles from './changelongbreaktime.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeLongBreakTime } from '../../../store/reducers/toolkitSlice';
import { ChangeParamsButton } from '../ChangeParamsButton';

export function ChangeLongBreakTime() {
	const dispatch = useAppDispatch();
	const { longBreakTime, breakTime } = useAppSelector(
		(state) => state.timerParams
	);

	return (
		<ChangeParamsButton
			heading="Продолжительность длинного перерыва"
			value={longBreakTime}
			onClickDecrease={
				longBreakTime > 1 && longBreakTime > breakTime
					? () => dispatch(changeLongBreakTime(longBreakTime - 1))
					: () => {}
			}
			onClickIncrease={() => dispatch(changeLongBreakTime(longBreakTime + 1))}
		/>
	);
}
