import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchMovieById } from '../../redux/actions';
import {
	MovieDetailsImage,
	MovieDetailsTitleBlock,
	MovieDetailsTitle,
	MovieDetailsRating,
	MovieDetailsTagline,
	MovieDetailsReleaseDate,
	MovieDetailsDuration,
	MovieDetailsOverview,
} from './styled.movie-details';

const MovieDetailsComponent = ({
	id,
	currentMovie,
	fetchMovieById,
	className,
}) => {
	useEffect(() => fetchMovieById(id), [id]);

	return (
		currentMovie && (
			<section className={className}>
				<MovieDetailsImage
					src={currentMovie.poster_path}
					alt="movie-image"
				/>
				<div>
					<MovieDetailsTitleBlock>
						<MovieDetailsTitle>
							{currentMovie.title}
						</MovieDetailsTitle>
						<MovieDetailsRating>
							{currentMovie.vote_average}
						</MovieDetailsRating>
					</MovieDetailsTitleBlock>
					<MovieDetailsTagline>
						{currentMovie.tagline}
					</MovieDetailsTagline>
					<MovieDetailsReleaseDate>
						{currentMovie.release_date.slice(0, 4)}
					</MovieDetailsReleaseDate>
					<MovieDetailsDuration>
						{currentMovie.runtime} min
					</MovieDetailsDuration>
					<MovieDetailsOverview>
						{currentMovie.overview}
					</MovieDetailsOverview>
				</div>
			</section>
		)
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

const mapStateToProps = (state) => ({
	currentMovie: state.movies.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovieById: (id) => dispatch(fetchMovieById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
