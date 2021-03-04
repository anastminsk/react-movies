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
					title={movie.title}
					genre={movie.genre}
					date={movie.date}
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
