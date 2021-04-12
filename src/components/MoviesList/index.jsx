import React from 'react';
import styled from 'styled-components';
import MovieCard from '../MovieCard';
import NoMovieFound from '../NoMovieFound';

const MoviesListComponent = ({ movies, className }) => {
	return (
		<div className={className}>
			{movies?.length ? (
				movies.map((movie) => (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						genres={movie.genres}
						overview={movie.overview}
						runtime={movie.runtime}
						release_date={movie.release_date}
						poster_path={movie.poster_path}
						tagline={movie.tagline}
						vote_average={movie.vote_average}
					/>
				))
			) : (
				<NoMovieFound />
			)}
		</div>
	);
};

const MoviesList = styled(MoviesListComponent)`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	width: 100%;
`;

export default MoviesList;
