import { createSlice } from '@reduxjs/toolkit';
import { getWeekNumber } from '../../utils/js/getWeekNumber';
import { getWeekDay } from '../../utils/js/getWeekDay';

export interface ITask {
	name: string;
	tomatoes: number;
	id: string;
	progress: number;
}

export enum EType {
	tomatoes = 'tomatoes',
	stops = 'stops',
	workTime = 'workTime',
	pauseTime = 'pauseTime',
}

export interface IStatistics {
	week: number;
	day: string;
	type: EType;
	value: number;
}

interface IState {
	tasks: Array<ITask>;
	statistics: Array<IStatistics>;
	timerParams: {
		currentTask: null | string;
		breakCounter: number;
		workTime: number;
		breakTime: number;
		longBreakTime: number;
		breaksFreq: number;
		notify: boolean;
	};
	statsParams: {
		currentWeek: number;
		currentDay: string;
	};
	darkTheme: boolean;
	isLoading: boolean;
	error: string;
}

const initialState: IState = {
	tasks: [],
	statistics: [],
	timerParams: {
		currentTask: null,
		breakCounter: 0,
		workTime: 25,
		breakTime: 5,
		longBreakTime: 15,
		breaksFreq: 4,
		notify: true,
	},
	statsParams: {
		currentWeek: getWeekNumber(new Date()),
		currentDay: getWeekDay(new Date()),
	},
	darkTheme: false,
	isLoading: false,
	error: '',
};

const toolkitSlice = createSlice({
	name: 'toolkit',
	initialState,
	reducers: {
		addTask(state, action) {
			state.tasks.push(action.payload);
		},
		updateTask(state, action) {
			state.tasks = action.payload;
		},
		updateCurrent(state, action) {
			state.timerParams.currentTask = action.payload;
		},
		updateBreakCounter(state, action) {
			state.timerParams.breakCounter = action.payload;
		},
		addStats(state, action) {
			state.statistics.push(action.payload);
		},
		updateCurrentDay(state, action) {
			state.statsParams.currentDay = action.payload;
		},
		updateCurrentWeek(state, action) {
			state.statsParams.currentWeek = action.payload;
		},
		changeTheme(state, action) {
			state.darkTheme = action.payload;
		},
		changeWorkTime(state, action) {
			state.timerParams.workTime = action.payload;
		},
		changeBreakTime(state, action) {
			state.timerParams.breakTime = action.payload;
		},
		changeLongBreakTime(state, action) {
			state.timerParams.longBreakTime = action.payload;
		},
		changeBreaksFreq(state, action) {
			state.timerParams.breaksFreq = action.payload;
		},
		changeNotify(state, action) {
			state.timerParams.notify = action.payload;
		},
	},
});

export const {
	addTask,
	updateTask,
	updateCurrent,
	updateBreakCounter,
	addStats,
	updateCurrentDay,
	updateCurrentWeek,
	changeTheme,
	changeWorkTime,
	changeBreakTime,
	changeLongBreakTime,
	changeBreaksFreq,
	changeNotify,
} = toolkitSlice.actions;

export default toolkitSlice.reducer;
