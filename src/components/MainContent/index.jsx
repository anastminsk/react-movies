import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/actions';
import ResultsHandler from '../ResultsHandler';
import MoviesList from '../MoviesList';
import ErrorBoundary from '../ErrorBoundary';
import {
	MainContentWrapper,
	MoviesResults,
	MoviesResultsNumber,
} from './styled.main-content';

const filter = ['All', 'Documentary', 'Action', 'Drama', 'Crime'];
const sort = ['Release Date', 'Genre', 'Title'];

const MainContent = ({ movies, fetchMovies, onMovieCardClick }) => {
	// const [moviesList, setMoviesList] = useState([]);

	useEffect(() => fetchMovies(), []);

	const filterMovies = useCallback((value) => {
		const filteredResults =
			value !== 'All'
				? movies.filter((movie) => movie.genre === value)
				: movies;
		// setMoviesList(filteredResults);
	}, [movies]);

	return (
		<MainContentWrapper>
			<ErrorBoundary>
				<ResultsHandler
					filter={filter}
					sort={sort}
					// onFilterChange={filterMovies}
				/>
				<MoviesResults>
					<MoviesResultsNumber>
						{movies.length}
					</MoviesResultsNumber>
					<span>movies found</span>
				</MoviesResults>
				<MoviesList
					movies={movies}
					onMovieCardClick={onMovieCardClick}
				/>
			</ErrorBoundary>
		</MainContentWrapper>
	);
};

const mapStateToProps = (state) => ({
	movies: state.movies.movies,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
