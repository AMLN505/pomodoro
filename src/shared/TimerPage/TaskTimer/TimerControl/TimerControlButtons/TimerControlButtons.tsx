import React from 'react';
import styles from './timercontrolbuttons.css';

interface IRenderControlButtons {
	greenButtonOnClick: () => void;
	greenButtonText: string;
	hollowButtonOnClick: () => void;
	hollowButtonText: string;
	hollowButtonDisabled?: boolean;
}

export function TimerControlButtons({
	greenButtonOnClick,
	greenButtonText,
	hollowButtonOnClick,
	hollowButtonText,
	hollowButtonDisabled,
}: IRenderControlButtons) {
	return (
		<div className={styles.buttonsContainer}>
			<button className={styles.greenButton} onClick={greenButtonOnClick}>
				{greenButtonText}
			</button>
			<button
				disabled={hollowButtonDisabled ? true : false}
				className={styles.hollowButton}
				onClick={hollowButtonOnClick}
			>
				{hollowButtonText}
			</button>
		</div>
	);
}
