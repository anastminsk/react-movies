import React from 'react';
import styled from 'styled-components';
import { movies } from '../MainContent/model';
import {
	MovieDetailsImage,
	MovieDetailsTitleBlock,
	MovieDetailsTitle,
	MovieDetailsRating,
	MovieDetailsGenre,
	MovieDetailsReleaseDate,
	MovieDetailsDuration,
	MovieDetailsOverview,
} from './styled.movie-details';

const MovieDetailsComponent = ({ id, className }) => {
	const movie = movies.find((movie) => movie.id === id);
	return (
		<section className={className}>
			<MovieDetailsImage src={movie.image} alt="movie-image" />
			<div>
				<MovieDetailsTitleBlock>
					<MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
					<MovieDetailsRating>{movie.rating}</MovieDetailsRating>
				</MovieDetailsTitleBlock>
				<MovieDetailsGenre>{movie.genre}</MovieDetailsGenre>
				<MovieDetailsReleaseDate>
					{movie.releaseDate.slice(0, 4)}
				</MovieDetailsReleaseDate>
				<MovieDetailsDuration>
					{movie.runTime} min
				</MovieDetailsDuration>
				<MovieDetailsOverview>
					{movie.overview}
				</MovieDetailsOverview>
			</div>
		</section>
	);
};

const MovieDetails = styled(MovieDetailsComponent)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: #fff;
	background-color: #232323;
	padding: 20px 40px;
`;

export default MovieDetails;
