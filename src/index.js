import React, {useState} from 'react';
import ReactDOM from "react-dom";
import Layout from "./Layout";
import '@fontsource/roboto';
import PermanentDrawerLeft from "./NavDrawer";
import {makeStyles} from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	// necessary for content to be below app bar
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
}));

export default function App() {
	const classes = useStyles();

	const [darkMode, setDarkMode] = useState(true);
	const [loggedIn, setLoggedIn] = useState(false);

	const theme = createMuiTheme({
		palette: {
			type: darkMode ? "dark" : "light",
		}
	});

	const handleCallBack = () => {
		setDarkMode(!darkMode);
	}

	let loginState = false;

	const handleLogin = () => {
		setLoggedIn(!loggedIn);
	}

	return (
			<ThemeProvider theme={theme}>
				<div className={classes.root}>
					<PermanentDrawerLeft darkModeToggle={() => handleCallBack()} darkModeBool={darkMode}
										 handleLogin={() => handleLogin()} loggedIn={loggedIn}/>
					<Layout/>
				</div>
			</ThemeProvider>
	);
}

ReactDOM.render(<App />, document.querySelector('#app'));