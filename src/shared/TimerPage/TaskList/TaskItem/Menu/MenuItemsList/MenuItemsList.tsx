import React from 'react';
import styles from './menuitemslist.css';
import { IncreaseButton } from './IncreaseButton';
import { DecreaseButton } from './DecreaseButton';
import { DeleteButton } from './DeleteButton';
import { ChangeButton } from './ChangeButton';

interface IMenuItemsList {
	taskId: string;
}

export function MenuItemsList({ taskId }: IMenuItemsList) {
	return (
		<ul className={styles.menuitemslist}>
			<li className={styles.menuItem}>
				<IncreaseButton taskId={taskId} />
			</li>
			<li className={styles.menuItem}>
				<DecreaseButton taskId={taskId} />
			</li>
			<li className={styles.menuItem}>
				<ChangeButton />
			</li>
			<li className={styles.menuItem}>
				<DeleteButton />
			</li>
		</ul>
	);
}
