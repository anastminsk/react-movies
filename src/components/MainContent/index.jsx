import React from 'react';
import ResultsHandler from '../ResultsHandler';
import MoviesList from '../MoviesList';
import MoviesListErrorBoundary from '../MoviesListErrorBoundary';
import { movies } from '../MoviesList/model';
import {
	MainContentWrapper,
	MoviesResults,
	MoviesResultsNumber
} from './styled.main-content';

const filter = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const sort = ['Release Date', 'Genre', 'Title'];


function MainContent() {
	return (
		<MainContentWrapper>
			<ResultsHandler filter={filter} sort={sort} />
			<MoviesResults>
				<MoviesResultsNumber>{movies.length}</MoviesResultsNumber>
				<span>movies found</span>
			</MoviesResults>
			<MoviesListErrorBoundary>
				<MoviesList />
			</MoviesListErrorBoundary>
		</MainContentWrapper>
	);
}

export default MainContent;
