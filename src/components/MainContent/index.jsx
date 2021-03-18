import React, { useCallback, useEffect, useState } from 'react';
import ResultsHandler from '../ResultsHandler';
import MoviesList from '../MoviesList';
import ErrorBoundary from '../ErrorBoundary';
import { movies } from './model';
import {
	MainContentWrapper,
	MoviesResults,
	MoviesResultsNumber,
} from './styled.main-content';

const filter = ['All', 'Documentary', 'Action', 'Drama', 'Crime'];
const sort = ['Release Date', 'Genre', 'Title'];

const MainContent = ({ onMovieCardClick }) => {
	const [moviesList, setMoviesList] = useState([]);

	const filterMovies = useCallback((value) => {
		const filteredResults =
			value !== 'All'
				? movies.filter((movie) => movie.genre === value)
				: movies;
		setMoviesList(filteredResults);
	}, [movies]);

	useEffect(() => {
		setMoviesList(movies);
	}, []);

	return (
		<MainContentWrapper>
			<ErrorBoundary>
				<ResultsHandler
					filter={filter}
					sort={sort}
					onFilterChange={filterMovies}
				/>
				<MoviesResults>
					<MoviesResultsNumber>
						{moviesList.length}
					</MoviesResultsNumber>
					<span>movies found</span>
				</MoviesResults>
				<MoviesList
					moviesList={moviesList}
					onMovieCardClick={onMovieCardClick}
				/>
			</ErrorBoundary>
		</MainContentWrapper>
	);
};

export default MainContent;
