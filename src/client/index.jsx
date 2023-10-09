import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from '../App';

window.addEventListener('load', () => {
	const container = document.getElementById('react-root');
	hydrateRoot(container, <App />);
});
