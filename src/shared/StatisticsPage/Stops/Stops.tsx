import React from 'react';
import styles from './stops.css';
import { StopsIcon } from '../../Icons';

interface IStops {
	stops: number;
}

export function Stops({ stops }: IStops) {
	return (
		<div
			className={
				stops === 0 ? styles.container : `${styles.container} ${styles.active}`
			}
		>
			<h2 className={styles.heading}>Остановки</h2>
			<p className={styles.value}> {stops === 0 ? 0 : `${stops}`}</p>
			<div className={styles.image}>
				<StopsIcon active={stops ? true : false} />
			</div>
		</div>
	);
}
