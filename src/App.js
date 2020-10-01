import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


import { 
	HomeContainer, 
	HeaderContainer 
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
      		<div className="App">
				<HeaderContainer step={stepState}/>
				<Switch>
					{/* New Person we don't know about */}
					<Route
						path="/new"
						exact
					>
						<HomeContainer step={stepState} setStep={setStepState} />
					</Route>
					{/* Entry point for a permalink */}
					<Route
						path="/:id"
					>
						<HomeContainer step={stepState} setStep={setStepState} />
					</Route>


					{/* 404 state */}
					<Route path="*">
						<Redirect to="/new"/>
					</Route>
				</Switch>
			</div>
   		</Router>
  );
}

export default App;
