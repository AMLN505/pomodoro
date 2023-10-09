import React from 'react';
import styles from './chart.css';
import {
	IStatistics,
	updateCurrentDay,
} from '../../../store/reducers/toolkitSlice';
import { groupBy } from '../../../utils/js/groupBy';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts';
import { useAppDispatch } from '../../../hooks/redux';
import { getHoursAndMins } from '../../../utils/js/getHoursAndMins';

interface IChart {
	weekWorkTime: Array<IStatistics>;
	currentDay: string;
}

interface IData {
	day: string;
	workTime: number;
}

export function Chart({ weekWorkTime, currentDay }: IChart) {
	const data = groupBy(weekWorkTime, (item) => item.day);
	const chartData: Array<IData> = [
		{ day: 'ПН', workTime: 0 },
		{ day: 'ВТ', workTime: 0 },
		{ day: 'СР', workTime: 0 },
		{ day: 'ЧТ', workTime: 0 },
		{ day: 'ПТ', workTime: 0 },
		{ day: 'СБ', workTime: 0 },
		{ day: 'ВС', workTime: 0 },
	].map((item) => {
		const workTime = data
			.get(item.day)
			?.reduce((sum, item) => sum + item.value, 0);

		return {
			day: item.day,
			workTime: workTime ? Math.round(workTime / 60) : 0,
		};
	});

	console.log(chartData);

	const dispatch = useAppDispatch();

	function handleClick(data: IData) {
		if (data.day !== currentDay) {
			dispatch(updateCurrentDay(data.day));
		}
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart data={chartData}>
				<YAxis
					orientation="right"
					axisLine={false}
					tickLine={false}
					tickFormatter={getHoursAndMins}
				/>
				<XAxis axisLine={false} tickLine={false} dataKey="day" />
				<CartesianGrid vertical={false} />
				<Bar dataKey="workTime" fill="#EA8A79" onClick={handleClick}>
					{chartData.map((item, index) => (
						<Cell
							cursor="pointer"
							fill={item.day === currentDay ? '#DC3E22' : '#EA8A79'}
							key={`cell-${index}`}
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
}
