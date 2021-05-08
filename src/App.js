import React from 'react'
import ReactDOM from 'react-dom'
import { LoremIpsum } from "lorem-ipsum";
import {Grid, Paper} from "@material-ui/core";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	}, wordsPerSentence: {
		max: 16,
		min: 4
	}
});

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

export default function App() {
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();

	const handleChange = (event) => {
		setSpacing(Number(event.target.value));
	};

	return (
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={spacing}>
						{[0, 1, 2].map((value) => (
							<Grid key = {value} item>
								<Paper className = {classes.paper}/>
							</Grid>
							))}
					</Grid>
				</Grid>
			</Grid>
	);
}