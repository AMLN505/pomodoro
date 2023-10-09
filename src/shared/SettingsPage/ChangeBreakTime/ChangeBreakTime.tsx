import React from 'react';
import styles from './changebreaktime.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeBreakTime } from '../../../store/reducers/toolkitSlice';
import { ChangeParamsButton } from '../ChangeParamsButton';

export function ChangeBreakTime() {
	const dispatch = useAppDispatch();
	const breakTime = useAppSelector((state) => state.timerParams.breakTime);

	return (
		<ChangeParamsButton
			heading="Продолжительность короткого перерыва"
			value={breakTime}
			onClickDecrease={
				breakTime > 1
					? () => dispatch(changeBreakTime(breakTime - 1))
					: () => {}
			}
			onClickIncrease={() => dispatch(changeBreakTime(breakTime + 1))}
		/>
	);
}
