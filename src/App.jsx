import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MovieSearchHeader from './components/MovieSearchHeader';
import MovieDetailsHeader from './components/MovieDetailsHeader';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

const AppWrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`;

const App = ({ context, location, Router, store }) => {
	return (
		<Provider store={store}>
			<Router location={location} context={context}>
				<AppWrapper>
					<Switch>
						<Route path={['/', '/search/:searchQuery']} exact>
							<MovieSearchHeader />
							<MainContent />
						</Route>
						<Route path="/movie/:id">
							<MovieDetailsHeader />
							<MainContent />
						</Route>
						<Route path="*" component={ErrorPage} />
					</Switch>
					<Footer />
				</AppWrapper>
			</Router>
		</Provider>
	);
};

export default App;
