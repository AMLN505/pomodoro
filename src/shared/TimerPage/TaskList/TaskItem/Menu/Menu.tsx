import React, { useContext } from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../../Dropdown';
import { MenuIcon } from '../../../../Icons';
import { MenuItemsList } from './MenuItemsList';
import { DeleteModal } from './MenuItemsList/DeleteModal';
import { controlContext } from '../../../../context/controlContext';

interface IMenu {
	taskId: string;
}

export function Menu({ taskId }: IMenu) {
	const { isDelModal, isChangeInput } = useContext(controlContext);

	return (
		<div className={styles.menu}>
			<Dropdown
				button={
					<button className={styles.menuButton}>
						<MenuIcon />
					</button>
				}
			>
				{!isDelModal && !isChangeInput && (
					<div className={styles.dropdown}>
						<MenuItemsList taskId={taskId} />
					</div>
				)}
			</Dropdown>
			{isDelModal && <DeleteModal taskId={taskId} />}
		</div>
	);
}
