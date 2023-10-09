import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';

export const timerContext = React.createContext<{
	isWork: boolean;
	setIsWork: React.Dispatch<React.SetStateAction<boolean>>;
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	isPaused: boolean;
	setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
	time: Array<number>;
	setTime: React.Dispatch<React.SetStateAction<Array<number>>>;
}>({
	isWork: false,
	setIsWork: () => {},
	isActive: false,
	setIsActive: () => {},
	isPaused: false,
	setIsPaused: () => {},
	time: [25, 0],
	setTime: () => {},
});

export function TimerContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isWork, setIsWork] = useState(true);
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const { workTime, breakTime, longBreakTime, breakCounter, breaksFreq } =
		useAppSelector((state) => state.timerParams);
	const [time, setTime] = useState([workTime, 0]);

	useEffect(() => {
		setTime([workTime, 0]);
		if (isWork) {
			setTime([workTime, 0]);
		} else {
			breakCounter % breaksFreq == 0 && breakCounter > breaksFreq - 1
				? setTime([longBreakTime, 0])
				: setTime([breakTime, 0]);
		}
	}, [workTime, breakTime, longBreakTime]);

	return (
		<timerContext.Provider
			value={{
				isWork,
				setIsWork,
				isActive,
				setIsActive,
				isPaused,
				setIsPaused,
				time,
				setTime,
			}}
		>
			{children}
		</timerContext.Provider>
	);
}
