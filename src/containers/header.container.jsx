import React from 'react';
import logo from '../logo.svg';

import {
	Container
} from '../components/index.js'

function HeaderContainer() {
	return (
		<Container>
			<img src={logo} className="App-logo" alt="logo" />
			
		</Container>
	);
}

export default HeaderContainer;
