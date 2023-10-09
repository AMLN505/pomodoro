import React from 'react';
import styles from './focus.css';
import { FocusIcon } from '../../Icons';

interface IFocus {
	focus: number;
}

export function Focus({ focus }: IFocus) {
	return (
		<div
			className={
				!focus ? styles.container : `${styles.container} ${styles.active}`
			}
		>
			<h2 className={styles.heading}>Фокус</h2>
			<p className={styles.value}> {!focus ? 0 : `${focus}`}%</p>
			<div className={styles.image}>
				<FocusIcon active={focus ? true : false} />
			</div>
		</div>
	);
}
