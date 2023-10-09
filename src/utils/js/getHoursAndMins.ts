export function getHoursAndMins(mins: number) {
	const hours = Math.trunc(mins / 60);
	const minutes = mins - hours * 60;

	return `${hours !== 0 ? `${hours} ч ` : ''} ${minutes} м`;
}
