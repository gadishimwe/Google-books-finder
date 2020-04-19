import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import routes from './routes';
import './app.scss';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0074D9'
		},
		secondary: {
			main: '#4caf50'
		}
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>{renderRoutes(routes)}</Router>
		</ThemeProvider>
	);
};

export default App;
