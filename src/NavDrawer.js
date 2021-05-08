import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
	Dialog, DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle, Input, InputAdornment, InputBase,
	ListItemSecondaryAction,
	Switch,
	TextField
} from "@material-ui/core";
import {compose, display, positions, spacing, typography} from "@material-ui/system";
import { styled } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import api from './api'
import * as PropTypes from "prop-types";
import SearchIcon from '@material-ui/icons/Search';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const Box = styled('div')(compose(spacing, typography, display, positions));

class Autocomplete extends React.Component {
	render() {
		return null;
	}
}

Autocomplete.propTypes = {
	freeSolo: PropTypes.bool,
	disableClearable: PropTypes.bool,
	id: PropTypes.string,
	renderInput: PropTypes.func
};
export default function PermanentDrawerLeft({darkModeToggle, darkModeBool, handleLogin, loggedIn}) {
	const classes = useStyles();

	const [signUp, setSignUp] = useState(false);
	const [login, setLogIn] = useState(false);
	const inputProps = {
		autoComplete: "Section1 Section2 Section3 Section4"
	}
	const handleOnChange = () => {
		darkModeToggle();
	};

	const handleSuccessfulLogin = () => {
		handleLogin();
	}

	const handleLoginClick = () => {
		// handleLogin();
		setLogIn(!login);
	}
	const handleLoginClose = () => {
		setLogIn(false);
	}

	const handleSignUp = () => {
		setSignUp(!signUp);
	}

	const handleSignUpClose = () => {
		setSignUp(false);
	}

	const handleSignUpConfirm = async () => {
		const payload = {"username": signUpUsername, "password": signUpPassword, "darkTheme": darkModeBool};
		// window.alert("Username: " + signUpUsername +  " Password: " + signUpPassword + " DarkMode: " + darkModeBool);
		await api.insertUser(payload).then(res => {
			window.alert('User created successfully');
			handleSignUpClose();
		}).catch((e) => {
			window.alert('User already exists');
		});

	}

	const handleLogoutClick = () => {
		handleLogin();
	}

	const handleLoginConfirm = async () => {
		window.alert("Logged in successfully!");
		const result = await api.getUser(loginUsername);
		await handleLoginCheck(result);
	}

	const handleLoginCheck = async (user) => {
		const username = JSON.stringify(user['data']['data']['username']);
		let password = JSON.stringify(user['data']['data']['password']);
		const darkTheme = JSON.stringify(user['data']['data']['darkTheme']);
		// window.alert("Username: " + username + " Password: " + password + " Dark Theme: " + darkTheme);
		// window.alert("Password: " + password.substr(1, password.length-2) +  " Entered password: " + loginPassword);
		if (darkTheme != darkModeBool) {
			darkModeToggle();
		}
		password = password.substr(1, password.length-2);
		if (password === loginPassword) {
			// window.alert("Login successful");
			handleSuccessfulLogin();
			handleLoginClose();
		}
	}

	const [signUpUsername, setSignUpUsername] = useState(null);
	const [signUpPassword, setSignUpPassword] = useState(null);

	const [loginUsername, setLoginUsername] = useState(null);
	const [loginPassword, setLoginPassword] = useState(null);


	const handleSignUpUsernameFieldChange = (username) => {
		setSignUpUsername(username.target.value);
	}

	const handleSignUpPasswordFieldChange = (password) => {
		setSignUpPassword(password.target.value);
	}

	const handleLoginUsernameFieldChange = (username) => {
		setLoginUsername(username.target.value);
	}

	const handleLoginPasswordFieldChange = (password) => {
		setLoginPassword(password.target.value);
	}

	const top100Films = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
		{ title: 'The Dark Knight', year: 2008 },
		{ title: '12 Angry Men', year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: 'Pulp Fiction', year: 1994 },
		{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
		{ title: 'The Good, the Bad and the Ugly', year: 1966 },
		{ title: 'Fight Club', year: 1999 },
		{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
		{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
		{ title: 'Forrest Gump', year: 1994 },
		{ title: 'Inception', year: 2010 },
		{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
		{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
		{ title: 'Goodfellas', year: 1990 },
		{ title: 'The Matrix', year: 1999 },
		{ title: 'Seven Samurai', year: 1954 },
		{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
		{ title: 'City of God', year: 2002 },
		{ title: 'Se7en', year: 1995 },
		{ title: 'The Silence of the Lambs', year: 1991 },
		{ title: "It's a Wonderful Life", year: 1946 },
		{ title: 'Life Is Beautiful', year: 1997 },
		{ title: 'The Usual Suspects', year: 1995 },
		{ title: 'Léon: The Professional', year: 1994 },
		{ title: 'Spirited Away', year: 2001 },
		{ title: 'Saving Private Ryan', year: 1998 },
		{ title: 'Once Upon a Time in the West', year: 1968 },
		{ title: 'American History X', year: 1998 },
		{ title: 'Interstellar', year: 2014 },
		{ title: 'Casablanca', year: 1942 },
		{ title: 'City Lights', year: 1931 },
		{ title: 'Psycho', year: 1960 },
		{ title: 'The Green Mile', year: 1999 },
		{ title: 'The Intouchables', year: 2011 },
		{ title: 'Modern Times', year: 1936 },
		{ title: 'Raiders of the Lost Ark', year: 1981 },
		{ title: 'Rear Window', year: 1954 },
		{ title: 'The Pianist', year: 2002 },
		{ title: 'The Departed', year: 2006 },
		{ title: 'Terminator 2: Judgment Day', year: 1991 },
		{ title: 'Back to the Future', year: 1985 },
		{ title: 'Whiplash', year: 2014 },
		{ title: 'Gladiator', year: 2000 },
		{ title: 'Memento', year: 2000 },
		{ title: 'The Prestige', year: 2006 },
		{ title: 'The Lion King', year: 1994 },
		{ title: 'Apocalypse Now', year: 1979 },
		{ title: 'Alien', year: 1979 },
		{ title: 'Sunset Boulevard', year: 1950 },
		{ title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
		{ title: 'The Great Dictator', year: 1940 },
		{ title: 'Cinema Paradiso', year: 1988 },
		{ title: 'The Lives of Others', year: 2006 },
		{ title: 'Grave of the Fireflies', year: 1988 },
		{ title: 'Paths of Glory', year: 1957 },
		{ title: 'Django Unchained', year: 2012 },
		{ title: 'The Shining', year: 1980 },
		{ title: 'WALL·E', year: 2008 },
		{ title: 'American Beauty', year: 1999 },
		{ title: 'The Dark Knight Rises', year: 2012 },
		{ title: 'Princess Mononoke', year: 1997 },
		{ title: 'Aliens', year: 1986 },
		{ title: 'Oldboy', year: 2003 },
		{ title: 'Once Upon a Time in America', year: 1984 },
		{ title: 'Witness for the Prosecution', year: 1957 },
		{ title: 'Das Boot', year: 1981 },
		{ title: 'Citizen Kane', year: 1941 },
		{ title: 'North by Northwest', year: 1959 },
		{ title: 'Vertigo', year: 1958 },
		{ title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
		{ title: 'Reservoir Dogs', year: 1992 },
		{ title: 'Braveheart', year: 1995 },
		{ title: 'M', year: 1931 },
		{ title: 'Requiem for a Dream', year: 2000 },
		{ title: 'Amélie', year: 2001 },
		{ title: 'A Clockwork Orange', year: 1971 },
		{ title: 'Like Stars on Earth', year: 2007 },
		{ title: 'Taxi Driver', year: 1976 },
		{ title: 'Lawrence of Arabia', year: 1962 },
		{ title: 'Double Indemnity', year: 1944 },
		{ title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
		{ title: 'Amadeus', year: 1984 },
		{ title: 'To Kill a Mockingbird', year: 1962 },
		{ title: 'Toy Story 3', year: 2010 },
		{ title: 'Logan', year: 2017 },
		{ title: 'Full Metal Jacket', year: 1987 },
		{ title: 'Dangal', year: 2016 },
		{ title: 'The Sting', year: 1973 },
		{ title: '2001: A Space Odyssey', year: 1968 },
		{ title: "Singin' in the Rain", year: 1952 },
		{ title: 'Toy Story', year: 1995 },
		{ title: 'Bicycle Thieves', year: 1948 },
		{ title: 'The Kid', year: 1921 },
		{ title: 'Inglourious Basterds', year: 2009 },
		{ title: 'Snatch', year: 2000 },
		{ title: '3 Idiots', year: 2009 },
		{ title: 'Monty Python and the Holy Grail', year: 1975 },
	];
	return (
		<div className={classes.root}>
			<Dialog open = {login} onClose={handleLoginClose}>
				<Box p="1rem">
					<DialogTitle id="form-login-title">Sign in</DialogTitle>
					<DialogContent>
						<Grid container spacing={1}>
							<Grid item xs>
								<TextField
									value={loginUsername}
									onChange={(e) =>
										handleLoginUsernameFieldChange(e)}
									autoFocus required id="login-username"
									label="Username"
									autoComplete="current-username"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs>
								<TextField
									value={loginPassword}
									onChange={(e) =>
										handleLoginPasswordFieldChange(e)}
									required id="login-password"
									label="Password"
									type="password"
									autoComplete="current-password"
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleLoginClose}>
							Cancel
						</Button>
						<Button onClick={handleLoginConfirm}>
							Sign in
						</Button>
					</DialogActions>
				</Box>
			</Dialog>

			<Dialog open = {signUp} onClose={handleSignUpClose}>
				<Box p="1rem">
					<DialogTitle id="form-signUp-title">Sign Up</DialogTitle>
					<DialogContent>
						<Grid container spacing={1}>
							<Grid item xs>
								<TextField
									value={signUpUsername}
									onChange={(e) =>
										handleSignUpUsernameFieldChange(e)}
									autoFocus required id="signup-username"
									label="Username"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs>
								<TextField value={signUpPassword} onChange =
									{(e) =>
										handleSignUpPasswordFieldChange(e)}
									required id="signup-password"
									label="Password"
									type="password"
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleSignUpClose}>
							Cancel
						</Button>
						<Button onClick={handleSignUpConfirm}>
							Sign Up
						</Button>
					</DialogActions>
				</Box>
			</Dialog>
			<CssBaseline />
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					<Box p="1rem">
						<ListItemText id ="switch-darkMode" primary="Dark Mode"/>
						<ListItemSecondaryAction>
							<Switch edge="end" onChange={() => handleOnChange()} checked={darkModeBool}/>
						</ListItemSecondaryAction>
					</Box>
				</List>
				<Divider />
				<List>
					{!loggedIn ?
						<ListItem button onClick={() => handleLoginClick()}>
							<ListItemIcon>
								<PersonIcon/>
							</ListItemIcon>
							<ListItemText>
								Login
							</ListItemText>
						</ListItem>
						:
						<ListItem button onClick={() => handleLogoutClick()}>
							<ListItemIcon>
								<ExitToAppIcon/>
							</ListItemIcon>
							<ListItemText>
								Sign Out
							</ListItemText>
						</ListItem>
					}
					{!loggedIn ?
						<ListItem button onClick={() => handleSignUp()}>
							<ListItemIcon>
								<AddIcon/>
							</ListItemIcon>
							<ListItemText>
								Sign Up
							</ListItemText>
						</ListItem>
						:
						null
					}
				</List>
				<Divider/>
			</Drawer>
		</div>
	);
}