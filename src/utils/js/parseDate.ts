export function parseDate(date: number) {
	const currentDate: Date = new Date();
	const thisDate: Date = new Date(date * 1000);

	return parseInt(
		String((currentDate.getTime() - thisDate.getTime()) / 3600000)
	);
}
