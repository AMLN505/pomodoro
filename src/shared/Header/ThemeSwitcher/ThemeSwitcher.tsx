import React, { useEffect } from 'react';
import styles from './themeswitcher.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeTheme } from '../../../store/reducers/toolkitSlice';
import { MoonIcon, SunIcon } from '../../Icons';

export function ThemeSwitcher() {
	const dispatch = useAppDispatch();
	const isDarkTheme = useAppSelector((state) => state.darkTheme);

	function handleClick() {
		dispatch(changeTheme(!isDarkTheme));
	}

	useEffect(() => {
		document.documentElement.dataset.darkTheme = `${isDarkTheme}`;
	}, [isDarkTheme]);

	return (
		<button className={styles.button} onClick={handleClick}>
			{isDarkTheme ? <MoonIcon /> : <SunIcon />}
		</button>
	);
}
