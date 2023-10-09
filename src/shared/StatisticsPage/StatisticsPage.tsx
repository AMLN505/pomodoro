import React from 'react';
import styles from './statisticspage.css';
import { useAppSelector } from '../../hooks/redux';
import { EType, IStatistics } from '../../store/reducers/toolkitSlice';
import { WorkTime } from './WorkTime';
import { Tomatoes } from './Tomatoes';
import { Focus } from './Focus';
import { Pause } from './Pause';
import { Stops } from './Stops';
import { Chart } from './Chart';
import { WeekSelect } from './WeekSelect';

export function StatisticsPage() {
	const { currentDay, currentWeek } = useAppSelector(
		(state) => state.statsParams
	);
	const statistics = useAppSelector((state) => state.statistics);
	const weekStats = statistics.filter((item) => item.week === currentWeek);
	const dayStats = weekStats.filter((item) => item.day === currentDay);

	function filterAndReduce(arr: Array<IStatistics>, type: EType) {
		return arr
			.filter((item) => item.type === type)
			.reduce((sum, item) => sum + item.value, 0);
	}

	const tomatoes = filterAndReduce(dayStats, EType.tomatoes);
	const stops = filterAndReduce(dayStats, EType.stops);
	const pauseTime = filterAndReduce(dayStats, EType.pauseTime) / 60;
	const workTime = filterAndReduce(dayStats, EType.workTime) / 60;
	const focus = Math.round((workTime * 100) / (pauseTime + workTime));
	const weekWorkTime = weekStats.filter((item) => item.type === EType.workTime);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<h1 className={styles.heading}>Ваша активность</h1>
				<div className={styles.select}>
					<WeekSelect currentWeek={currentWeek} />
				</div>
			</div>
			<div className={styles.grid}>
				<div className={styles.workTime}>
					<WorkTime workTime={Math.round(workTime)} currentDay={currentDay} />
				</div>
				<div className={styles.tomatoes}>
					<Tomatoes tomatoes={tomatoes} />
				</div>
				<div className={styles.chart}>
					<Chart weekWorkTime={weekWorkTime} currentDay={currentDay} />
				</div>
				<div className={styles.focus}>
					<Focus focus={focus} />
				</div>
				<div className={styles.pause}>
					<Pause pauseTime={Math.round(pauseTime)} />
				</div>
				<div className={styles.stops}>
					<Stops stops={stops} />
				</div>
			</div>
		</div>
	);
}
