import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { FaCloudSun, FaCloudMoon } from 'react-icons/fa';
import styles from './nav.module.scss';

const ThemeSwitch = () => {
	const toggleThemeHandler = () => {};
	const [colorTheme, setTheme] = useDarkMode();
	const [theme, setThemeState] = useState<string | null>(colorTheme);

	useEffect(() => {
		setThemeState(colorTheme);
	}, [colorTheme]);
	return (
		<button
			className={
				colorTheme === 'dark' ? styles.themeToggleDark : styles.themeToggle
			}
			onClick={() => setTheme(colorTheme === 'light' ? 'dark' : 'light')}
		>
			<span>
				{theme === 'dark' && <FaCloudMoon className={styles.moonIcon} />}
				{theme === 'light' && <FaCloudSun className={styles.sunIcon} />}
			</span>
		</button>
	);
};

export default ThemeSwitch;
