import { EType } from '../../store/reducers/toolkitSlice';
import { getWeekDay } from './getWeekDay';
import { getWeekNumber } from './getWeekNumber';

export function addStatsItem(type: EType, value: number) {
	const date = new Date();

	return {
		week: getWeekNumber(date),
		day: getWeekDay(date),
		type: type,
		value: value,
	};
}
