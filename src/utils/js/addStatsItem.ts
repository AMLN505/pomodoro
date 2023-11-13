import { useAppDispatch } from '../../hooks/redux';
import {
	EType,
	IStatistics,
	addStats,
} from '../../store/reducers/toolkitSlice';
import { getWeekDay } from './getWeekDay';
import { getWeekNumber } from './getWeekNumber';

export function addStatsItem(type: EType, value: number) {
	const dispatch = useAppDispatch();

	const date = new Date();
	const statItem: IStatistics = {
		week: getWeekNumber(date),
		day: getWeekDay(date),
		type: type,
		value: value,
	};

	dispatch(addStats(statItem));
}
