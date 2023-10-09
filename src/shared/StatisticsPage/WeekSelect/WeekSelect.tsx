/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './weekselect.css';
import Select from 'react-select';
import { useAppDispatch } from '../../../hooks/redux';
import { updateCurrentWeek } from '../../../store/reducers/toolkitSlice';
import { getWeekNumber } from '../../../utils/js/getWeekNumber';

interface IWeekSelect {
	currentWeek: number;
}

export function WeekSelect({ currentWeek }: IWeekSelect) {
	const dispatch = useAppDispatch();

	const thisWeek = getWeekNumber(new Date());
	const options = [
		{ value: thisWeek, label: 'Эта неделя' },
		{ value: thisWeek - 1, label: 'Прошедшая неделя' },
		{ value: thisWeek - 2, label: '2 недели назад' },
	];

	const styles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: 'var(--grey-light)',
			minHeight: 'auto',
			borderRadius: '0',
			border: 'none',
			boxShadow: 'none',
			height: '55px',
			cursor: 'pointer',
		}),
		valueContainer: (styles: any) => ({
			...styles,
			paddingLeft: '15px',
		}),
		indicatorSeparator: (styles: any) => ({
			...styles,
			display: 'none',
		}),
		dropdownIndicator: (styles: any) => ({
			...styles,
			color: 'var(--colorB7280F)',
		}),
		menu: (styles: any) => ({
			...styles,
			margin: '0',
			borderRadius: '0',
			boxShadow: 'none',
			backgroundColor: 'var(--grey-light)',
		}),
		menuList: (styles: any) => ({
			...styles,
			padding: '0',
		}),
		option: (styles: any, { isFocused }: any) => ({
			...styles,
			padding: '19px 15px',
			borderTop: '1px solid var(--grey-dark)',
			backgroundColor: isFocused ? 'var(--grey-dark)' : 'var(--grey-light)',
			cursor: 'pointer',
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: 'var(--text-color)',
		}),
	};

	return (
		<Select
			styles={styles}
			isSearchable={false}
			defaultValue={options.find((option) => option.value === currentWeek)}
			options={options}
			hideSelectedOptions={true}
			onChange={(option) => dispatch(updateCurrentWeek(option?.value))}
		/>
	);
}
