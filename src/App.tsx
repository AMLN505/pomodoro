import React, { useEffect, useState } from 'react';
import './main.global.css';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotFound } from './shared/NotFound';
import { TimerPage } from './shared/TimerPage';
import { StatisticsPage } from './shared/StatisticsPage';
import { SettingsPage } from './shared/SettingsPage';
import { PersistGate } from 'redux-persist/integration/react';

export function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppContent />
			</PersistGate>
		</Provider>
	);
}

function AppContent() {
	const [mounted, setMounted] = useState(false);
	console.log(localStorage);
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Layout>
			{mounted && (
				<BrowserRouter>
					<Header />
					<Content>
						<Routes>
							<Route path="/" element={<Navigate to="pomodoro" replace />} />
							<Route
								path="pomodoro"
								element={<Navigate to="timer" replace />}
							/>
							<Route path="pomodoro/timer" element={<TimerPage />} />
							<Route path="pomodoro/statistics" element={<StatisticsPage />} />
							<Route path="pomodoro/settings" element={<SettingsPage />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Content>
				</BrowserRouter>
			)}
		</Layout>
	);
}
