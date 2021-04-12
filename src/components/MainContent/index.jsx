import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, filterMovies, sortMovies } from '../../redux/actions';
import ResultsHandler from '../ResultsHandler';
import MoviesList from '../MoviesList';
import ErrorBoundary from '../ErrorBoundary';
import {
	MainContentWrapper,
	MoviesResults,
	MoviesResultsNumber,
} from './styled.main-content';

const filters = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const sort = ['release_date', 'rating'];

const MainContent = ({ movies, sorting, fetchMovies, filterMovies, sortMovies }) => {
	useEffect(() => fetchMovies(), []);

	return (
		<MainContentWrapper>
			<ErrorBoundary>
				<ResultsHandler
					filters={filters}
					sort={sort}
					sortValue={sorting}
					onFilterChange={(filter) => filterMovies(filter)}
					onSortingChange={(sortValue) => sortMovies(sortValue)}
				/>
				<MoviesResults>
					<MoviesResultsNumber>
						{movies.length}
					</MoviesResultsNumber>
					<span>movies found</span>
				</MoviesResults>
				<MoviesList movies={movies} />
			</ErrorBoundary>
		</MainContentWrapper>
	);
};

const mapStateToProps = (state) => ({
	movies: state.movies.movies,
	sorting: state.movies.sorting,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
	filterMovies: (filter) => dispatch(filterMovies(filter)),
	sortMovies: (sortValue) => dispatch(sortMovies(sortValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
