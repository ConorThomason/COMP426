import React from 'react'
import Navigation from './Navigation'
import 'bulma/css/bulma.min.css';
import './App.scss';
import ThemeMode from './ThemeChanger';
import './stylesheet.scss';
import {Columns, Content, Heading} from "react-bulma-components";

const App = () => {
		return <div className="App">
		<ThemeMode/>
				<Columns>
					<Columns.Column narrow="true" id="navigationMenu">
						<Navigation/>
					</Columns.Column>
					<Columns.Column id="prosSide" class="column content">
					</Columns.Column>
					<Columns.Column narrow="true" alignItems="center">
					</Columns.Column>
					<Columns.Column id="consSide" class="column content has-text-right">
					</Columns.Column>
				</Columns>
		</div>
}

export default App