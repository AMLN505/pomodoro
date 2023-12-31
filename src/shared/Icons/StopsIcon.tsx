import React from 'react';

interface IStopsIcon {
	active?: boolean;
}

export function StopsIcon({ active = false }: IStopsIcon) {
	return (
		<svg
			width="129"
			height="129"
			viewBox="0 0 129 129"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M64.3158 118.632C94.3136 118.632 118.632 94.3136 118.632 64.3158C118.632 34.318 94.3136 10 64.3158 10C34.318 10 10 34.318 10 64.3158C10 94.3136 34.318 118.632 64.3158 118.632Z"
				stroke={active ? '#7FC2D7' : '#C4C4C4'}
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M28 27L102 101"
				stroke={active ? '#7FC2D7' : '#C4C4C4'}
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
