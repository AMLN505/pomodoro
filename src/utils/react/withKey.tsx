import React from 'react';

export function withKey(key?: string) {
	return <E extends object, T extends React.ComponentType<E>>(component: T) =>
		// eslint-disable-next-line react/display-name
		(props: E, index: number) =>
			React.createElement(
				component,
				{ ...props, key: key ? props[key as keyof E] : index },
				[]
			);
}
