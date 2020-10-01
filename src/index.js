import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

//dark mode
const theme = createMuiTheme({
	palette: {
		type: 'dark'
	}
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
		<CssBaseline />
      	<App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
