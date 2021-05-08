import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import {loremIpsum, LoremIpsum} from "lorem-ipsum"
import { styled } from "@material-ui/core/styles";
import {compose, spacing, palette, typography, positions} from '@material-ui/system';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import axios from "axios";
import Image from 'material-ui-image'

const drawerWidth = 240;

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	},
	wordsPerSentence: {
		max: 16,
		min: 4
	}
});

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	paperImage: {
		height: "200px",
		width: "200px",
	}
}));

const Box = styled('div')(compose(spacing, palette, typography, positions));

export default function Layout() {
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();

	const [leftWidth, setLeftWidth] = React.useState(null);
	const [midWidth, setMidWidth] = React.useState(null);
	const [rightWidth, setRightWidth] = React.useState(null);

	const handleChange = (event) => {
		setSpacing(Number(event.target.value));
	};

	const options = {
		method: 'GET',
		url: 'https://geek-jokes.p.rapidapi.com/api',
		params: {format: 'json'},
		headers: {
			'x-rapidapi-key': '3e71ab8d66msh6a8dc964fc26183p121dccjsnb8a1f9e07e04',
			'x-rapidapi-host': 'geek-jokes.p.rapidapi.com'
		}
	};

	useEffect(() => {
		handleJoke();
		handleCat();
		handleDog();
	}, []);

	const [joke, setJoke] = useState('');
	const [catPic, setCatPic] = useState('');
	const [dogPic, setDogPic] = useState('');

	const handleJoke = () => {
		const result = axios.request(options).then(function (response) {
			console.log(response.data);
			setJoke(response.data.joke);
		}).catch(function (error) {
			console.error(error);
		});
	}

	const catPicRequest = {
		method: 'GET',
		url: 'https://api.thecatapi.com/v1/images/search',
		params: {format: 'json'},
		headers: {
			'x-api-key': '9aea27cc-6cb1-41dd-9847-cd0b394cdcc3'
		}
	};

	const handleCat = () => {
		const result = axios.request(catPicRequest).then(function (response) {
			console.log(response.data);
			setCatPic(response.data[0].url);
		}).catch(function (error) {
			console.error(error);
		});
	}

	const dogPicRequest = {
		method: 'GET',
		url: 'https://api.thedogapi.com/v1/images/search',
		params: {format: 'json'},
		headers: {
			'x-api-key': 'd7c4c013-b51a-40de-bfad-012bef3bd50d'
		}
	}
	const handleDog = () => {
		const result = axios.request(dogPicRequest).then(function(response) {
			console.log(response.data);
			setDogPic(response.data[0].url);
		}).catch(function (error) {
			console.error(error);
		});
	}

	return (
		<Box p="1rem">
		<Grid container justify="center" spacing={spacing}>
		<Grid item xs>
			<Paper className={classes.paper}>
				<Typography variant="body1" style={{whitespace: 'pre-line', display:'inline-block'}}>
					<Box textAlign="left" p="1rem">
						<Typography variant="h5">Website Concept</Typography>
						<section>
							This website has been developed for the sake of meeting the final project credit
							for two classes - COMP 426 and COMP 380.
						</section>
						<section>
							To summarize, this website is being designed with the intent of showing two sides of
							an argument simultaneously - in this case, for Artificial Intelligence.
						</section>
						<section>
							This side will likely be the "pros" side, while the other side (currently Lorem Ipsum)
							will be the cons side.
						</section>
						<section>
							By simultaneously producing both sides of the argument on individual topics of research,
							I hope to at least partially reach the goal of allowing a viewer to develop a
							(somewhat) unbiased view.
						</section>
						<section/>
						<section>
							<Typography variant="h5">Cards</Typography>
							The card section within the center of the screen will present "tidbits" of a sort. They
							will contain links to articles with media previews, random jokes (as seen to the left),
							and ideally some sources as the writing progresses. I can adjust the spacing for each
							card, so ideally they will be contained next to the relevant content.
							<section>
								There is also a cat pic. Because I like points.
							</section>
						</section>
						<section>
							<Typography variant="h5">User System</Typography>
							This website features a User system, allowing currently just logging in/out. This is not
							maintained with cookies, but it does save the darkTheme state. So if you feel like logging
							instead of hitting the toggle for dark mode, go right ahead!
							<section>
								The system is based on a MERN stack - MongoDB, Express, React and Node.js. This easily
								took the most time to develop - hence the rather minimalist layout of the website.
							</section>
								<img width="500px"
									src={catPic}
								/>
								<section>
								Images seem to work well also - good for article format, as intended.
								</section>
						</section>
					</Box>
				</Typography>
			</Paper>
		</Grid>
		<Grid item xs={2} >
			<Box m={2}>
			<Card className = {classes.root} spacing={spacing} variant="outlined">
				<CardHeader>
					title="Test Card"
					subheader = "Some date"
				</CardHeader>
				<CardContent>
					<Typography variant="h5">
						Test Content Card
					</Typography>
					<Typography variant="body2">
						{lorem.generateSentences(3)}
					</Typography>
				</CardContent>
			</Card>
			</Box>
			<Box m={2} pt={3}>
			<Card className = {classes.root} variant="outlined">
				<CardHeader>
					title="Joke card!"
				</CardHeader>
				<CardContent onLoad={() => handleJoke()}>
					<Typography variant="h5">
						Joke Card!
					</Typography>
						{joke}
					<Typography variant="body2">
						~Courtesy of the "Geek Jokes" api
					</Typography>
				</CardContent>
			</Card>
			</Box>
			<Box m={2} pt={3}>
				<Card className = {classes.root} variant="outlined">
					<CardHeader>
						title="Cat!"
					</CardHeader>
					<CardContent>
						<Typography variant="h5">
							Have a cat pic!
						</Typography>
						<Image src={catPic} alt="Image not found"/>
						<Typography variant="body2">
							 ~Courtesy of "The Cat API"
						 </Typography>
					</CardContent>
				</Card>
			</Box>
			<Box m={2} pt={3}>
				<Card className = {classes.root} variant="outlined">
					<CardHeader>
						title="Dog!"
					</CardHeader>
					<CardContent>
						<Typography variant="h5">
							Have a dog pic!
						</Typography>
						<Image src={dogPic} alt="Image not found"/>
						<Typography variant="body2">
							~Courtesy of "The Dog API"
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Grid>
		<Grid item xs>
			<Paper className={classes.paper}>
				<Typography variant="body1">
					<Box textAlign = "right" p="1rem">
						<Typography variant="h5">Lorem Ipsum</Typography>
						{lorem.generateParagraphs(5)}
					</Box>
				</Typography>
			</Paper>
		</Grid>
		</Grid>
		</Box>
	);
}