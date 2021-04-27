import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configure-store';
import App from './App';
import './index.less';

const store = configureStore(window.PRELOADED_STATE);

hydrate(
	<Provider Router={BrowserRouter} store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
