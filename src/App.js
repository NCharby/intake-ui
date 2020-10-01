import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
	Container
} from './components/index.js'

import {  
	HeaderContainer,
	LoaderContainer,
	ProcessContainer,
	WelcomeContainer
} from './containers/index.js'

import {
  	BrowserRouter as Router,
  	Switch,
  	Route,
  	Link,
	Redirect
} from "react-router-dom";

function App() {
	const [stepState, setStepState] = useState(0)

  	return (
    	<Router>
      		<Container className="App">
				<HeaderContainer step={stepState}/>
				<Switch>

					<Route
						path="/:id/details"
					>
						<ProcessContainer step={stepState} setStep={setStepState} />
					</Route>
					{/* Entry point for a permalink */}
					<Route
						path="/:id"
					>
						<LoaderContainer step={stepState} setStep={setStepState} ChildView={WelcomeContainer}/>
					</Route>
					

					{/* 404 state */}
					<Route path="*">
						<Redirect to="/new"/>
					</Route>
				</Switch>
			</Container>
   		</Router>
  );
}

export default App;
