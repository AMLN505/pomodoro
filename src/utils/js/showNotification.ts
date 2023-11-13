export function showNotification(body: string) {
	const not = new Notification('Pomodoro_box', {
		body: body,
		icon: 'https://img.freepik.com/free-vector/fresh-tomato_1053-566.jpg?w=2000',
	});

	const sound = new Audio(
		'https://btones.b-cdn.net/fetch/59/5980d6d84fdde2c38b7d87250384d4e8.mp3'
	);
	sound.play();
}
