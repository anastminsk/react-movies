import React from 'react';
import styled from 'styled-components';
import MovieCard from '../MovieCard';
import { movies } from './model';

const MoviesListComponent = ({ className }) => {
	return (
		<div className={className}>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					title={movie.title}
					genre={movie.genre}
					overview={movie.overview}
					url={movie.url}
					runTime={movie.runTime}
					releaseDate={movie.releaseDate}
					image={movie.image}
				/>
			))}
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
