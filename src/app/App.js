import React from 'react'
import Navigation from '../components/Navigation'
import 'bulma/css/bulma.min.css';
import ThemeMode from '../components/ThemeChanger';
import '../stylesheet.scss';
import {Columns} from "react-bulma-components";
import {LoremIpsum} from "lorem-ipsum";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	}, wordsPerSentence: {
		max: 16,
		min: 4
	}
});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		}
	}
	render() {
		return (<div className="App">
			<ThemeMode/>
			<Columns>
				<Columns.Column narrow="true" name="navigationMenu">
					<Navigation onLoginClick={() =>{}}/>
				</Columns.Column>
				<Columns.Column id="prosSide" class="column content">
					{lorem.generateParagraphs(7)}
				</Columns.Column>
				<Columns.Column narrow="true" alignItems="center">
				</Columns.Column>
				<Columns.Column id="consSide" class="column content has-text-right">
					{lorem.generateParagraphs(7)}
				</Columns.Column>
			</Columns>
		</div>);
	}

}
export default App