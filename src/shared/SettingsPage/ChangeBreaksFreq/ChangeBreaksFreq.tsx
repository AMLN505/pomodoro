import React from 'react';
import styles from './changebreaksfreq.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeBreaksFreq } from '../../../store/reducers/toolkitSlice';
import { ChangeParamsButton } from '../ChangeParamsButton';

export function ChangeBreaksFreq() {
	const dispatch = useAppDispatch();
	const breaksFreq = useAppSelector((state) => state.timerParams.breaksFreq);

	return (
		<ChangeParamsButton
			heading="Частота длинных перерывов"
			value={breaksFreq}
			onClickDecrease={
				breaksFreq > 1
					? () => dispatch(changeBreaksFreq(breaksFreq - 1))
					: () => {}
			}
			onClickIncrease={() => dispatch(changeBreaksFreq(breaksFreq + 1))}
		/>
	);
}
