import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import App from './App';
import './index.less';

const store = configureStore(window.PRELOADED_STATE);
const app = <App Router={BrowserRouter} store={store} />;

hydrate(app, document.getElementById('root'));
