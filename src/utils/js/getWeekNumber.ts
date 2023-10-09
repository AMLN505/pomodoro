export function getWeekNumber(date: Date) {
	const d: Date = new Date(
		Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
	);

	const dayNum = d.getUTCDay() || 7;

	d.setUTCDate(d.getUTCDate() + 4 - dayNum);

	const yearStart: Date = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

	return Math.ceil(((+d - +yearStart) / 86400000 + 1) / 7);
}
