import React, { useState, useEffect } from 'react';
import {Button} from "react-bulma-components";
const ThemeChanger = () => {
	const [themeState, setThemeState] = useState(false);

	const handleChange = () => {
		setThemeState(!themeState);
		if (themeState) {
			localStorage.setItem('Theme', 'dark');
			document.body.classList.add('dark-mode');
		} else {
			localStorage.setItem('Theme', 'light');
			document.body.classList.remove('dark-mode');
		}
	}
	useEffect(() => {
		const getTheme = localStorage.getItem('Theme');
		if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
	})
	return (
		<div>
			<Button id="themeButton" color={themeState ? "dark" : "white"}
					onClick={handleChange}>{themeState ? 'Dark Mode' : 'Light Mode'}</Button>
		</div>
	)
}

export default ThemeChanger;