import React from 'react'
import 'bulma/css/bulma.min.css';
import {Columns, Container, Menu} from 'react-bulma-components';

const navStyle = {
	position: 'sticky',
	display: 'inline-block',
	width: '200px',
	top: '0',
	bottom: '0',
	padding: '30px',
};

const Navigation = () => {
	const [showLogin, setShowLogin] = React.useState(false);
	const onLoginClick = () => setShowLogin(true);
	return (<Menu style={navStyle}>
		<Menu.List title="User">
			<Menu.List.Item name="loginButton">
				Login
			</Menu.List.Item>
		</Menu.List>
		<Menu.List title="Test">
			<Menu.List.Item>
				Test Item
			</Menu.List.Item>
			<Menu.List.Item>
				Test Item 2
			</Menu.List.Item>
		</Menu.List>
	</Menu>);
}

const Login = () => (
		<div id="loginOverlay">
			<Container id="formContainer">
				<Columns alignContent="center" alignItems="center">
					<Columns.Column size="three-fifths" alignContent="center" alignItems="center">
						<div class="field">
							<label class="label" name="userLabel">
								Sign In
							</label>
							<input class="input" type="text" placeholder="Username"/>
							<input class="input" type="password" placeholder="Password"/>
							<div class="control">
							</div>
						</div>
					</Columns.Column>
				</Columns>
			</Container>
		</div>
);

export default Navigation