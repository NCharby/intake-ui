import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {
	Container,
	CircularProgress
} from './components/index.js'

import API from './api/index'

import {  
	HeaderContainer,
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
	const [isLoading, setIsLoading] = useState(true)
    const [hasData, setHasData] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const result = await API.fetchRecord()
            setData(result)
            
            //it's empty?
            if(Object.entries(result).length === 0){
                setHasData(false)
            } else {
                setHasData(true)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])

  	return (
		<Router>
			<Container className="App">
				<HeaderContainer step={stepState}/>
				{isLoading && !hasData? (
					<CircularProgress size={100}/>
				): (
				<Switch>

					<Route path="/:id/details">
						<ProcessContainer step={stepState} setStep={setStepState} data={data}/>
					</Route>
					{/* Entry point for a permalink */}
					<Route path="/:id">
						<WelcomeContainer step={stepState} setStep={setStepState} data={data}/>
					</Route>
					

					{/* 404 state */}
					{/* <Route path="*">
						<Redirect to="/new"/>
					</Route> */}
				</Switch>
				)}
			</Container>
		</Router>
  );
}

export default App;
