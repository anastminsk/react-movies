import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieMenu from '../MovieMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const MovieCardContainer = styled.div`
	width: calc(100% / 3 - 25px);
`;

const MovieImageSection = styled.div`
	position: relative;
	&:hover {
		cursor: pointer;
		${MovieMenu} {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

const MovieImage = styled.img`
	width: 100%;
	height: 400px;
`;

const MovieInfoSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 10px 10px 30px;
	color: #c0c0c0;
`;

const MovieTitle = styled.p`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 5px;
`;

const MovieGenre = styled.p`
	font-size: 14px;
`;

const MovieDate = styled.p`
	font-size: 14px;
	padding: 3px 8px;
	border: 1px solid #c0c0c0;
	border-radius: 10%;
`;

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

MovieImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default MovieCard;
