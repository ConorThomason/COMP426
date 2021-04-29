import React from 'react'
import 'bulma/css/bulma.min.css';
import {Menu} from 'react-bulma-components';

const navStyle= {
	position: 'sticky',
	display: 'inline-block',
	width: '200px',
	top: '0',
	bottom: '0',
	padding: '30px',
};
const Navigation = () => {
	return <Menu style={navStyle}>
		<Menu.List title="Test">
			<Menu.List.Item>
				Test Item
			</Menu.List.Item>
			<Menu.List.Item>
				Test Item 2
			</Menu.List.Item>
		</Menu.List>
	</Menu>
}
export default Navigation