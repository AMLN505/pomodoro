import React from 'react';
import styles from './changetomatotime.css';
import { ChangeParamsButton } from '../ChangeParamsButton';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeWorkTime } from '../../../store/reducers/toolkitSlice';

export function ChangeTomatoTime() {
	const dispatch = useAppDispatch();
	const workTime = useAppSelector((state) => state.timerParams.workTime);

	return (
		<ChangeParamsButton
			heading="Продолжительность помидора"
			value={workTime}
			onClickDecrease={
				workTime > 1 ? () => dispatch(changeWorkTime(workTime - 1)) : () => {}
			}
			onClickIncrease={() => dispatch(changeWorkTime(workTime + 1))}
		/>
	);
}
