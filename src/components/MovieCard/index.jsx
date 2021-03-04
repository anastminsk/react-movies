import React from 'react';
import PropTypes from 'prop-types';
import MovieMenu from '../MovieMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {
	MovieCardContainer,
	MovieImageSection,
	MovieImage,
	MovieInfoSection,
	MovieTitle,
	MovieGenre,
	MovieDate
} from './styled.movie-card';

const MovieCard = ({ title, genre, date, image }) => {
	return (
		<MovieCardContainer>
			<MovieImageSection>
				<MovieImage src={image} alt="movie-image" />
				<MovieMenu>
					<FontAwesomeIcon icon={faEllipsisV} />
				</MovieMenu>
			</MovieImageSection>
			<MovieInfoSection>
				<div>
					<MovieTitle>{title}</MovieTitle>
					<MovieGenre>{genre}</MovieGenre>
				</div>
				<MovieDate>{date}</MovieDate>
			</MovieInfoSection>
		</MovieCardContainer>
	);
};

MovieCard.propTypes = {
	title: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
	title: 'Just a Perfect Movie',
	genre: 'Comedy',
	date: 2021,
};

export default MovieCard;
