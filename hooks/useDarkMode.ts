import { useEffect, useState } from 'react';

export const getLocalTheme = () => {
	let currentTheme = 'light';
	if (typeof window !== 'undefined') {
		let currentLocalTheme = localStorage.getItem('theme');
		console.log('localTheme', currentLocalTheme);
		currentTheme = currentLocalTheme ? currentLocalTheme : 'light';
	}
	return currentTheme;
};
export function useDarkMode() {
	const [theme, setTheme] = useState<string | null>('light');

	useEffect(() => {
		const currentTheme = getLocalTheme();
		setTheme(currentTheme);
	}, []);

	useEffect(() => {
		if (window === undefined) return;
		const root = window.document.documentElement;
		root.classList.remove(theme === 'dark' ? 'light' : 'dark');
		root.classList.add(theme === 'light' ? 'light' : 'dark');

		localStorage.setItem('theme', theme!);
	}, [theme]);

	return [theme, setTheme];
}
